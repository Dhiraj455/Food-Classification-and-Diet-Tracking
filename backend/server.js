const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var multer = require('multer');
require("dotenv").config();
require("./config/db");
const path = require("path");
const initRoutes = require("./routes/index");
const formData = require('express-form-data');
const app = express();

app.use(formData.parse());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,accept,access_token,X-Requested-With');
  next();
});

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.send("Hello World");
});

const upload = multer({
  destination: 'public/images',
});
app.use(express.static(path.join(__dirname, 'public')));

initRoutes(app);
const PORT = process.env.PORT || 5000;

app.listen(PORT, function (error, port) {
  if (error) {
    console.log("Error starting server");
  } else {
    console.log("\x1b[32m%s\x1b[0m", `Server started on port ${PORT}`);
  }
});
