<<<<<<< HEAD
const db = require("../models/");

module.exports = {
	//Add particiapnt with their email
	addParticipant: function(req, res) {
		let eventId = req.params.eventId;

		db.Participant.create({
			email: req.body.email,
			eventId: eventId
		})
			.then(participant => {
				db.Event.updateOne(
					{
						_id: eventId
					},
					{ $push: { participants: participant._id } },
					{ new: true }
				).then(participantAdded => {
					res.json(participantAdded);
				});
			})

			.catch(err => {
				res.json(err);
			});
	},

	updateUserIdForParticipant: function(req, res) {}
};
=======
const db = require("../models");

module.exports = {};
>>>>>>> dcb37b61bc1ee4da3eadbb26b825e0f19965747b
