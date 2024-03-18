const Food = require("../models/Food");
const formData = require("form-data");
const axios = require("axios");

module.exports.addFood = async (req, res) => {
  let response = {
    success: false,
    message: "",
    errMessage: "",
  };
  try {
    console.log(req.body, "Body");
    console.log(req.file, "Files");
    const { name, calories, protein, carbs, fats, fiber } = req.body;
    const todayDate = new Date();
    const sessionDay = todayDate.toDateString();
    let food;
    if (req.file) {
      food = process.env.URL + "/images/Food/" + req.file.filename;
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
        totalCalories: calories,
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

module.exports.getAllSession = async (req, res) => {
  let response = { success: false, message: "", data: [], errMessage: "" };
  try{
    const session = await Food.Session.find({ createdBy: "65f2e685ee2ccd52aea97cd6" });
    if (session.length === 0) {
      response.message = "No session found";
      return res.status(200).json(response);
    }
    for (let i = 0; i < session.length; i++) {
      const food = await Food.Food.find({ sessionId: session[i]._id });
      response.data.push({ session: session[i], food });
    }
    response.success = true;
    response.message = "Session found successfully";
    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
    response.errMessage = err.message;
    res.status(500).json(response);
  }
};
