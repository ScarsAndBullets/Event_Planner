const db = require("../models/");

module.exports = {
	//Add participant with their email
	addParticipant: function (req, res) {
		let eventId = req.params.eventId;

		console.log(eventId = "adding participant")

		db.Participant.create({
			email: req.body.email,
			eventId: eventId
		})
			.then(participant => {
				db.Event.updateOne(
					{
						_id: eventId
					},
					{
						$push: {
							participants: participant._id
						}
					},
					{
						new: true
					}
				).then(participantAdded => {
					res.json(participantAdded);
				});
			})

			.catch(err => {
				res.json(err);
			});
	}
};
