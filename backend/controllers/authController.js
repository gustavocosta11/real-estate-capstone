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
authController.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!User) {
      throw new Error("Wrong credentials!");
    }

    const comparePass = await bcrypt.compare(req.body.password, user.password);
    if (!comparePass) {
      throw new Error("Wrong credentials!");
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "4h",
    });
    const { password, ...others } = user._doc;

    return res.status(200).json({ others, token });
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

module.exports = authController;
