const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  taskName: { type: String, trim: true },
  description: { type: String },
  taskAssigned: { type: Boolean }
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
