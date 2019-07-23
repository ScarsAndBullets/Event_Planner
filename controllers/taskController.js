const db = require("../models");

module.exports = {
	getTasks: function(req, res) {
		console.log("All Tasks:");
		db.Task.find(req.query)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},

	findById: function(req, res) {
		db.Task.findById(req.params.id)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},

	createTask: function(req, res) {
		console.log("New Task:");
		db.Task.create({
			taskName: req.body.taskName,
			taskAssigned: false,
			strikeThrough: false
		})
			.then(task => {
				console.log(task);
				db.Event.updateOne(
					{ _id: req.body.eventId },
					{
						$push: {
							tasks: task._id
						}
					},
					{
						new: true
					}
				)
					.then(() => {
						res.json(task);
					})
					.catch(err => {
						res.json(err);
					});
			})
			.catch(err => res.status(422).json(err));
		console.log(req.body);
	},

	updateTask: function(req, res) {
		console.log("Task Updated:");
		db.Task.findOneAndUpdate(
			{
				_id: req.params.id
			},
			req.body
		)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},

	deleteTask: function(req, res) {
		console.log("Task Deleted:");
		db.Task.findById({
			_id: req.params.id
		})
			.then(dbModel => dbModel.remove())
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	}
};
