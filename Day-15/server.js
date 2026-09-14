//mongodb+srv://rlavinsh_db_user:<db_password>@cluster0.visgnit.mongodb.net/

const express = require("express");
const mongoose = require("mongoose");
const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017");
    console.log("Database connected");
  } catch (err) {
    console.log(err);
  }
};

// schema
new mongoose.Schema({
    bookName: String,
    bookPrice: Number,
    
})



app.listen(3000, () => {
  connectDB();
  console.log("server running on port");
});
