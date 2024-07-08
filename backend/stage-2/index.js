const sequelize = require("./config/database")
const express = require("express")
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth")


const app = express();

app.use(bodyParser.json());
app.use('/auth', authRoutes)

// Synchronize model with database (create the table if it doesn't exist)
sequelize.sync()
    .then(() => {
        console.log("Database synchronized");
    })
    .catch((err) => {
        console.error("Error synchronizing the database");
    });

app.get("/", (req, res) => {
    res.send("Hello World");
})



const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})





