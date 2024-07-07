const { DataTypes, UUIDV4 } = require("sequelize")
const sequelize = require("../db")

// Define model User
const User = sequelize.define('User', {
    "userId": {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
  },
    "firstName":{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'First Name is required'
            }
        }
    },
    "lastName": {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Last Name is required'
            }
        }
    },
    "email": {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            msg: 'Email already exists',
        },
        validate: {
            isEmail: {
                msg: 'Email is not valid',
            }
        }
    },
    "password": {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Password is required'
            }
        }
    },
    "phone": {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Phone number is required'
            },
            len: {
                args: [6, 15],
                    msg: 'Phone number must be at least 6 characters'
            }
        }
    },
})


module.exports = User;