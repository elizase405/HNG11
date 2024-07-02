require("dotenv").config();
const express = require("express");
const axios = require("axios");
const api_key = process.env.API


const app = express()
app.set('trust proxy', true)

app.get("/api/hello", async (req, res) => {
    const name = req.query.visitor_name
    let ip = req.ip
    console.log(name, ip)

    const res_data = axios.get(`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${ip}`).then(res => res.data)
    let data = await res_data.then(res => res)
    const location = data.location.name
    const temp = data.current.temp_c
    console.log(data)

    res.json({
        "client_ip": ip,
        "location": location, // The city of the requester
        "greeting": `Hello, ${name}!, the temperature is ${temp} degrees Celcius in ${location}`
    })
})


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server listening at PORT ${PORT}`)
})