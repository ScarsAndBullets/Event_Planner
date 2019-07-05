const db = require("../models");

module.exports = {
	createEvent: function(req, res) {
		const event = req.body;
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
						res.send("Event Created");
					});
				});
			})
			.catch(err => {
				res.json(err);
			});
	}
};
// {
//     "title": "New Event",
//         "date": "07/10/2019",
//             "location": "Salt Lake City",
//                 "requirements": ["Knives", "Forks", "WHatever", "propane", "cocaine"]
// }
