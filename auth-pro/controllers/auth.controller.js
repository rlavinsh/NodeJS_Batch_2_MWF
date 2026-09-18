const User = require("../models/user.schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const testing = (req, res) => {
  res.status(200).json({
    message: "Testing Done",
  });
};

const register = async (req, res) => {
  try {
    const { username, age, email, password } = req.body;
    if (!username || !email || !password || age === undefined) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const checkEmail = await User.findOne({ email });

    if (checkEmail) {
      return res.status(409).json({
        success: false,
        message: "Email already Exist",
      });
    }

    // Hashing the Password
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      age,
      email,
      password: hashPassword,
    });

    return res.status(201).json({
      success: true,
      message: "User Registered successfully",
      newUser,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Username/email and password are required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid username/email or password",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Invalid username/email or password",
      });
    }

    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
    });

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
    });
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const profile = async (req, res) => {
  const user = await User.findById(req.user.userId);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User Not found",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Profile Found",
    user,
  });
};

const logout = (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({
    success: true,
    message: "User Logout",
  });
};

module.exports = { testing, register, login, profile, logout };
