const db = require("../models/");

module.exports = {
	createTask: function(req, res) {
		db.Task.create({
			taskName: req.body.taskName,
			//description:req.body.description
			strikethrough: false
		});
	},
	updateTask: function(req, res) {
		db.Task.findByIdAndUpdate(
			// the id of the item to find
			req.params.taskId,

			{ new: true },
			(err, taskId) => {
				if (err) return res.statu(500).send(err);
				return res.send(todo);
			}
		);
	}
};
