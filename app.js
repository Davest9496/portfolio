//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const path = require('path')
const router = express.Router();

const port = 3000;
 

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + `/html/index.html`));
});

router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname + `/html/about.html`));
});

router.get('/mail', (req, res) => {
  res.sendFile(path.join(__dirname + `/html/mail.html`));
});

router.get('/project', (req, res) => {
  res.sendFile(path.join(__dirname + `/html/project.html`));
});

app.use("/", router);

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`);
});

//process.env.PORT || 