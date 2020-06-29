const express = require('express')
const config = require('./config/config')
const nodemailer = require('nodemailer');

const app = express()
app.listen(process.env.PORT || config.port,
    () => console.log(`Server start on port ${config.port} ...`))

app.get('/', function (req, res) {
    res.send('Hello World!');
});