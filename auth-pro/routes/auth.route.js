const express = require("express");

const authRoute = express.Router();

const {
  testing,
  register,
  login,
  profile,
  logout,
} = require("../controllers/auth.controller");

const authMiddleware = require("../middleware/auth.middleware");

authRoute.get("/testing", testing);
authRoute.post("/register", register);
authRoute.post("/login", login);
authRoute.get("/profile", authMiddleware, profile);
authRoute.post("/logout", logout);

module.exports = authRoute;
