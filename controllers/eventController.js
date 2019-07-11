const db = require("../models");

module.exports = {
	createEvent: function(req, res) {
		db.Event.create({
			title: req.body.title,
			date: req.body.date,
			location: req.body.location,
			requirements: req.body.requirements,
			eventOwnerId: req.user.id
		})
			.then(event => {
				db.Participant.create({
					email: req.user.email,
					userId: req.user.id,
					eventId: event._id
				}).then(participant => {
					db.Event.updateOne(
						{
							_id: event._id
						},
						{ $push: { participants: participant._id } },
						{ new: true }
					).then(eventCreated => {
						res.json(eventCreated);
					});
				});
			})
			.catch(err => {
				res.json(err);
			});
	},

	updateEvent: function(req, res) {
		let eventId = req.params.eventId;
		db.Event.updateOne({ _id: eventId }, req.body)
			.then(eventUpdated => {
				res.json(eventUpdated);
			})
			.catch(err => {
				res.json(err);
			});
	},
	//Get all users events
	eventDashboard: function(req, res) {
		db.Participant.find({ userId: req.user.id })
			.then(participantEvents => {
				let eventsIds = [];
				participantEvents.map(participant => {
					eventsIds.push(participant.eventId);
				});
				db.Event.find({ _id: { $in: eventsIds } })
					.populate("participants")
					.populate("tasks")
					.then(events => {
						let eventsAttending = [];
						let eventsOwned = [];
						results = {};
						events.map(event => {
							if (event.eventOwnerId === req.user.id) {
								eventsOwned.push(event);
							} else {
								eventsAttending.push(event);
							}
						});

						results.eventsAttending = eventsAttending;
						results.eventsOwned = eventsOwned;

						res.json(results);
					});
			})
			.catch(err => {
				res.json(err);
			});
	}
};
