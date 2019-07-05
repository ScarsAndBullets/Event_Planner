const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const participantSchema = new Schema({
	email: { type: String, required: true },
	userId: { type: String, required: false },
	eventId: { type: Schema.Types.ObjectId, required: true },
	tasks: [
		{
			type: Schema.Types.ObjectId,
			ref: "User"
		}
	]
});

const Participant = mongoose.model("Participant", participantSchema);

module.exports = Participant;
