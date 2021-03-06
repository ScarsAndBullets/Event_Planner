const db = require("../models");

module.exports = {
	createEvent: function(req, res) {
		db.Event.create({
			title: req.body.title,
			date: req.body.date,
			time: req.body.time,
			location: req.body.location,
			details: req.body.details,
			requirements: req.body.requirements,
			eventOwnerId: req.user.id
		})
			.then(event => {
				db.Participant.create({
					email: req.user.email,
					name: `${req.user.firstName} ${req.user.lastName}`,
					userId: req.user.id,
					eventId: event._id
				}).then(participant => {
					db.Event.findOneAndUpdate(
						{
							_id: event._id
						},
						{ $push: { participants: participant._id } },
						{ new: true, useFindAndModify: false }
					)
						.then(response => {
							res.json(response);
						})
						.catch(err => {
							res.json(err);
						});
				});
			})
			.catch(err => {
				res.json(err);
			});
	},

	updateEvent: function(req, res) {
		let eventId = req.params.eventId;
		db.Event.updateOne(
			{
				_id: eventId
			},
			req.body
		)
			.then(eventUpdated => {
				res.json(eventUpdated);
			})
			.catch(err => {
				res.json(err);
			});
	},
	//Get all users events
	eventDashboard: function(req, res) {
		db.Participant.find({
			userId: req.user.id
		})
			.then(participantEvents => {
				let eventsIds = [];
				participantEvents.map(participant => {
					eventsIds.push(participant.eventId);
				});
				db.Event.find({
					_id: {
						$in: eventsIds
					}
				})
					.populate("participants")
					.populate("tasks")
					.then(eventData => {
						let results = [];
						eventData.map(event => {
							if (event.eventOwnerId === req.user.id) {
								event.owner = true;
								results.push(event);
							} else {
								results.push(event);
							}
						});
						res.json(results);
					})
					.catch(err => {
						res.json(err);
					});
			})
			.catch(err => {
				res.json(err);
			});
	},

	getEvent: function(req, res) {
		db.Event.findById({
			_id: req.params.id
		})
			.populate({
				path: "participants",
				populate: {
					path: "tasks",
					model: "Task"
				}
			})
			.populate("tasks")
			.then(event => {
				if (req.user) {
					const results = {
						title: event.title,
						details: event.details,
						date: event.date,
						time: event.time,
						location: event.location,
						requirements: event.requirements,
						participants: event.participants,
						tasks: event.tasks,
						eventOwnerId: event.eventOwnerId,
						userId: req.user.id,
						eventId: req.params.id
					};
					res.json(results);
				} else {
					const results = {
						title: event.title,
						details: event.details,
						date: event.date,
						time: event.time,
						location: event.location,
						requirements: event.requirements,
						participants: event.participants,
						tasks: event.tasks,
						eventOwnerId: event.eventOwnerId,
						userId: null,
						eventId: req.params.id
					};
					res.json(results);
				}
			})
			.catch(err => {
				res.json(err);
			});
	}
};
