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
	}
};
