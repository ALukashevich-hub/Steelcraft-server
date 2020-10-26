const express = require('express');
const config = require('./config/config');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT || config.port,
    () => console.log(`Server start on port ${config.port} ...`));

app.get('/', function (req, res) {
    res.send({testGet: 'Got a GET request from /'});
    console.log('GET COMPLITE');
});

app.get('/api', function (req, res) {
  res.send({testGetApi: 'Got a GET request from /api'});
  console.log('GET COMPLITE');
});

app.post('/', function (req, res) {
  res.send({testPost: 'Got a POST request'});
  console.log('POST COMPLITE');
  console.log(req.body);
  //SendMail();
});

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: 'xxx@gmail.com',
      pass: 'xxx'
    }
  });

async function SendMail() {
  try {
    let result = await transporter.sendMail({
      from: '"Node js" <nodejs@example.com>',
      to: "light_25.96@tut.by",
      subject: "Message from Node js",
      text: "This message was sent from Node js server.",
      html: "This <i>message</i> was sent from <strong>Node js</strong> server."
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}