const Food = require("../models/Food");
const formData = require("form-data")
const axios = require("axios");

module.exports.addFood = async (req, res) => {
  let response = {
    success: false,
    message: "",
    errMessage: "",
  };
  try {
    const {name,calories,protein,carbs,fats,fiber} = req.body;
    const todayDate = new Date();
    const sessionDay = todayDate.toDateString();
    let food;
    if (req.files) {
      food = process.env.URL + "/images/Food/" + req.files.filename;
    } else {
      response.message = "Set Post Image";
      return res.status(200).json(response);
    }
    const session = await Food.Session.findOne({ sessionDay: sessionDay });
    if (!session) {
      const newSession = new Food.Session({
        sessionDate: todayDate,
        sessionDay: sessionDay,
        createdBy: req.user._id,
      });
      await newSession.save();
      const newFood = new Food.Food({
        sessionId: newSession._id,
        foodDetails: {
          name,
          foodImg: food,
          calories,
          protein,
          carbs,
          fats,
          fiber,
        },
        createdBy: req.user._id,
      });
      await newFood.save();
    } else {
      const newFood = new Food.Food({
        sessionId: session._id,
        foodDetails: {
          name,
          foodImg: food,
          calories,
          protein,
          carbs,
          fats,
          fiber,
        },
        createdBy: req.user._id,
      });
      await newFood.save();
    }
    response.success = true;
    response.message = "Food added successfully";
    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
    response.errMessage = err.message;
    res.status(500).json(response);
  }
};