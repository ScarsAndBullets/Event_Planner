const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: { type: String, required: true },
  date:
  
});

const Event = mongoose.model("Event", userSchema);

module.exports = Event;