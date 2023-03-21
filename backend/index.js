const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();

// mongodb connect

mongoose.connect(process.env.MONGO_URL);

// starting server
app.listen(process.env.PORT, () => {
  console.log(`Server is running`);
});
