const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
	title: { type: String, required: true }
});

const Location = mongoose.model("Location", userSchema);

module.exports = Location;
