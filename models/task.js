const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    taskName: {
        type: String,
        required: false
    },
    description: {
        type: String
    },
    taskAssignedTo: {
        type: Boolean
    },
    strikeThrough: {
        type: Boolean
    }
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;