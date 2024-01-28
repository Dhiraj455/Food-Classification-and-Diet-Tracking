const mongoose = require("mongoose");


const FoodSessionSchema = new mongoose.Schema({
    sessionDate: {
        type: Date,
        required: [true, "Please provide a session date"],
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    sessionDay :{
        type: String,
    },
});

const FoodSchema = new mongoose.Schema({
  sessionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Session",
  },
  foodDetails: {
    name: {
      type: String,
      required: [true, "Please provide a name"],
    },
    foodImg: {
      type: String,
      required: [true, "Please provide a food image"],
    },
    calories: {
      type: Number,
    },
    protein: {
      type: Number,
    },
    carbs: {
      type: Number,
    },
    fats: {
      type: Number,
    },
    fiber: {
      type: String,
    },
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Food = mongoose.model("Food", FoodSchema);
const Session = mongoose.model("Session", FoodSessionSchema);
module.exports = { Food, Session };
