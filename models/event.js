const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    details: {
        type: String,
        trim: true
    },
    requirements: {
        type: String,
        trim: true
    },
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: "Task"
    }],

    participants: [{
        type: Schema.Types.ObjectId,
        ref: "Participant"
    }],
    eventOwnerId: {
        type: String,
        required: true
    },
    owner: {
        type: Boolean,
        default: false
    }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;