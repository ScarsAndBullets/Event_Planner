const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
  phoneNumber: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;