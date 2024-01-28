const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/food-recognition", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('\x1b[32m%s\x1b[0m', 'MongoDB Connected'))
  .catch((err) => console.log(err));
