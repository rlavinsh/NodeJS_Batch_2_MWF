const express = require("express");

const userRoutes = express.Router();

userRoutes.get("/", (req, res) => {
  res.send("HomePage");
});

userRoutes.get("/about", (req, res) => {
  //   console.log("Processing Request");
  res.send("This is a about Page");
});

userRoutes.get("/contact", (req, res) => {
  //   console.log("Processing Request");
  res.send("This  is a contact Page");
});



// error (err,req,res,next) -> Homework - error Middleware
// middleware kaise req,res ko modify karta hein

module.exports = userRoutes;
