const authController = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt"); // used for hashing password
const jwt = require("jsonwebtoken");

// register
// using async function because it's interacting with Database
authController.post("/register", async (req, res) => {
  try {
    const isExisting = await User.findOne({ email: req.body.email });
    if (isExisting) {
      throw new Error("Email is already registered");
    }

    // hash password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
    });
    // ...req.body is going to get username, email and password

    const { password, ...others } = newUser._doc;
    // it will be getting rid of the password for security reasons

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "4h",
    });
    return res.status(201).json({ others, token });
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

// login

module.exports = authController;
