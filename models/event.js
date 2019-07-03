const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
	title: { type: String, required: true, trim: true },
	date: { type: Date, required: true },
	location: { type: String, required: true },
	requirements: [{ type: String, trim: true }],
	tasks: [
		{
			type: Schema.Types.ObjectId,
			ref: "Task"
		}
	],

	participants: [
		{
			type: Schema.Types.ObjectId,
			ref: "Participant"
		}
	],
	eventOwnerId: {
		type: Schema.Types.ObjectId,
		ref: "User"
	}
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
