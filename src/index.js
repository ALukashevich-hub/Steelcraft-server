const express = require('express');
const config = require('./config/config');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT || config.port,
    () => console.log(`Server start on port ${config.port} ...`));

app.get('/', function (req, res) {
    res.send({testGet: 'Got a GET request'});
    console.log('GET COMPLITE');
});
app.post('/', function (req, res) {
  res.send({testPost: 'Got a POST request'});
  console.log('POST COMPLITE');
  console.log(req.body);
});