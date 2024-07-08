require("dotenv").config()
const Sequelize = require("sequelize")
const express = require("express")

const PGSQL_URI = process.env.PGSQL_URI;
const app = express();

// Create instance
const sequelize = new Sequelize(PGSQL_URI, {
    dialect: 'postgres',
    logging: false
})

// Test the database connection
sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been established");
    })
    .catch(error => {
        console.error("Unable to connect to the database", error);
    })

module.exports = sequelize;