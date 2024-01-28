const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

require("./config/db");
const initRoutes = require("./routes/index");
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World");
});

initRoutes(app);
const PORT = process.env.PORT || 5000;

app.listen(PORT, function (error, port) {
  if (error) {
    console.log("Error starting server");
  } else {
    console.log("\x1b[32m%s\x1b[0m", `Server started on port ${PORT}`);
  }
});
