const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const participantSchema = new Schema({
	email: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: false
	},
	attending: {
		type: Boolean,
		default: false
	},
	userId: {
		type: String,
		required: false,
		default: null
	},
	eventId: {
		type: Schema.Types.ObjectId,
		required: true
	},
	tasks: [{
		type: Schema.Types.ObjectId,
		ref: "Task"
	}]
});

const Participant = mongoose.model("Participant", participantSchema);

module.exports = Participant;