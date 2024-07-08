const { ValidationError } = require("sequelize");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { v4: uuidv4 } = require('uuid');
const User = require("../model/User")
const Organisation = require("../model/Organisation")


// Create User
const register = async (req, res) => {
    const { firstName, lastName, email, password, phone } = req.body
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            userId: uuidv4(),
            firstName,
            lastName,
            email,
            password: hashedPassword,
            phone
        });
        console.log(user.userId)
        const orgName = `${firstName}'s Organisation`;
        const organisation = await Organisation.create({
            name: orgName,
            description: `${firstName}'s personal organisation`,
        });

        await user.addOrganisation(organisation);

        const token = jwt.sign({ userId: user.userId }, process.env.KEY, { expiresIn: '1h' });
        res.status(201).json({
            status: 'success',
            message: 'Registration successful',
            data: {
                accessToken: token,
                user: {
                    userId: user.userId,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    phone: user.phone,
                },
            },
        });
    } catch(err) {
        if (err instanceof ValidationError) {
            const errors = err.errors.map(err => ({
                field: err.path,
                message: err.message
            }));
            return res.status(422).json({ errors })
        }
        console.log(err.message)
        res.status(400).json({
            status: 'Bad request',
            message: 'Registration unsuccessful',
            statusCode: 400,
        });
    }
}


const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({
        status: 'Bad request 404',
        message: 'Authentication failed',
        statusCode: 401,
      });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({
        status: 'Bad request',
        message: 'Authentication failed',
        statusCode: 401,
      });
    }

    const token = jwt.sign({ userId: user.userId }, process.env.KEY, { expiresIn: '1h' });
    res.status(200).json({
      status: 'success',
      message: 'Login successful',
      data: {
        accessToken: token,
        user: {
          userId: user.userId,
          firstName: user.  firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
        },
      },
    });
  } catch (error) {
      console.log(error.message)
    res.status(400).json({
      status: 'Bad request',
      message: 'Authentication failed',
      statusCode: 401,
    });
  }
};

module.exports = { register, login };