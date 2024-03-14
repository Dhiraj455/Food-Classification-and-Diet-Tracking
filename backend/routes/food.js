const express = require("express");
const router = express.Router();
const foodController = require("../controllers/food");
const { setDestination, upload } = require("../middlewares/image");
const authentication = require("../middlewares/Auth");

router.post(
  "/add",
  setDestination("public/images/Food"),
  upload.single("foodImg"),
  authentication,
  foodController.addFood
);

module.exports = router;
