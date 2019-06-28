const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const participantSchema = new Schema({
  email: { type: String, required: true },
  userId: { type: String, required: false },
});

const Participant = mongoose.model("Participant", userSchema);

module.exports = Participant;