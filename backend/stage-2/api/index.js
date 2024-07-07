const sequelize = require("./db")
const User = require("./models/user")
const express = require("express")
const { ValidationError } = require("sequelize");

const app = express();
app.use(express.json());


// Synchronize model with database (create the table if it doesn't exist)
sequelize.sync()
    .then(() => {
        console.log("Database synchronized");
    })
    .catch((err) => {
        console.error("Error synchronizing the database");
    });

// Create User
app.post("/auth/register", (req, res) => {
    const { firstName, lastName, email, password, phone } = req.body

    // hash password before storing

    User.create({ firstName, lastName,  email, password, phone})
        .then((user) => {
            const { userId, fiestName, lastName, email, phone } = user.toJson()
            res.status(201).json({
                "status": "success",
                "message": "Registration successful",
                data: {
                    "accessToken": ".....",
                    "user": { userId, fiestName, lastName, email, phone }
                }
            });
        })
        .catch((err) => {
        if (err instanceof ValidationError) {
            const errors = err.errors.map(err => ({
                field: err.path,
                message: err.message
            }));
            res.status(422).json({ errors })
        } else {
            res.status(500).json({ error: err.message });
        }
    })
})

/* User registration
- if success return 201 code with payload
- If unsuccessful: {
    "status": "Bad request",
    "message": "Registration unsuccessful",
    "statusCode": 400,
}
*/


/* User login
- endpoint:  /auth/login
- req.body = {
    "email": "string",
    "password": "string",
}
- use jwt token returned to access protected endpoints
- if success return 200 code with payload {
    "status": "success",
    "message": "Login successful",
    data: {
        "accessToken": ".....",
        "user": {
            "userId": "string",
            "firstName": "string",
            "lastName":"string",
            "email": "string",
            "phone": "string"
        }
    }
}
- If unsuccessful: {
    "status": "Bad request",
    "message": "Authentication failed",
    "statusCode": 401,
}
*/



const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})





