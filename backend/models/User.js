const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true, // must provide username
      unique: true, // username must me unique
    },
    email: {
      type: String,
      required: true, // must provide email
      unique: true, // email must me unique
    },
    password: {
      type: String,
      required: true,
      min: 6, // min of 6 characters
    },
    profileImg: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
