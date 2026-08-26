const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/userkadata");
    console.log("Database connected");
  } catch (err) {
    console.log(err);
  }
};

// schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const user = mongoose.model("user", userSchema);

app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  const isEmailExist = await user.findOne({ email });
  if (isEmailExist) {
    return res.status(409).json({
      success: false,
      message: "Email already exist",
    });
  }

  const newUser = await user.create({
    email,
    password,
  });
  return res.status(201).json({
    success: true,
    message: "user created",
    newUser,
  });
});



app.listen(3000, () => {
  connectDB();
  console.log("server running on port");
});
