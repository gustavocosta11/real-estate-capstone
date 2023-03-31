const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const authController = require("./controllers/authController");
const propertyController = require("./controllers/propertyController");
const uploadController = require("./controllers/uploadController");
const app = express();

// mongodb connect

mongoose.connect(process.env.MONGO_URL);

app.use("/images", express.static("public/images"));

// routes & middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authController);
app.use("/properties", propertyController);
app.use("/upload", uploadController);

// starting server
app.listen(process.env.PORT, () => {
  console.log(`Server is running`);
});
