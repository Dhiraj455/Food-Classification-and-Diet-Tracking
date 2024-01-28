const express = require("express");
const router = express.Router();
const foodController = require("../controllers/food");
const { setDestination, upload } = require("../middlewares/image");

router.post(
  "/add",
  setDestination("public/images/Food"),
  upload.single("foodImg"),
  foodController.addFood
);

module.exports = router;
