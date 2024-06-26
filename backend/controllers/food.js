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
    const session = await Food.Session.findOne({
      sessionDay: sessionDay,
      createdBy: req.user._id,
    });
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
      Food.Session.findOneAndUpdate(
        {
          sessionDate: todayDate,
          sessionDay: sessionDay,
          createdBy: req.user._id,
        },
        { $inc: { totalCalories: calories } }
      );
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
  try {
    const session = await Food.Session.find({
      createdBy: req.user._id,
    });
    if (session.length === 0) {
      response.message = "No session found";
      return res.status(200).json(response);
    }
    for (let i = 0; i < session.length; i++) {
      let totalCalories = 0;
      const food = await Food.Food.find({ sessionId: session[i]._id });
      for (let j = 0; j < food.length; j++) {
        totalCalories += food[j].foodDetails.calories;
      }
      response.data.push({ session: session[i], food, totalCalories });
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

module.exports.addAddons = async (req, res) => {
  let response = {
    success: false,
    message: "",
    errMessage: "",
  };
  try {
    console.log(req.body, "Body");
    const { name, calories, grams, foodId } = req.body;
    const food = await Food.Food.findOne({ _id: foodId });
    if (!food) {
      response.message = "Food not found";
      return res.status(200).json(response);
    }
    const newAddon = {
      name,
      calories,
      grams,
    };
    food.addons.push(newAddon);
    await food.save();
    Food.Food.findOneAndUpdate(
      { _id: foodId },
      { $inc: { "foodDetails.calories": calories } }
    );
    response.success = true;
    response.message = "Addon added successfully";
    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
    response.errMessage = err.message;
    res.status(500).json(response);
  }
};

module.exports.getAddons = async (req, res) => {
  let response = {
    success: false,
    message: "",
    data: [],
    errMessage: "",
  };
  try {
    console.log(req.body, "Body");
    const { foodId } = req.params;
    const food = await Food.Food.findOne({ _id: foodId });
    if (!food) {
      response.message = "Food not found";
      return res.status(200).json(response);
    }
    response.data = food.addons;
    response.success = true;
    response.message = "Addon found successfully";
    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
    response.errMessage = err.message;
    res.status(500).json(response);
  }
};
