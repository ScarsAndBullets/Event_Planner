const db = require("../models/");
const User = require("../models/user");

// Defining methods for the userController
module.exports = {
	//Sign up user
	signup: function(req, res) {
		let password = req.body.password;
		let password2 = req.body.password2;

		if (password === password2) {
			const newUser = new User(req.body);

			db.User.createUser(newUser, function(err, user) {
				if (err) {
					if (err.code === 11000)
						return res
							.status(500)
							.json("Email already in use")
							.end();
					else if (err.errors.email.message)
						return res
							.status(500)
							.json(err.errors.email.message)
							.end();
				}
				return res.send(user).end();
			});
		} else {
			res
				.status(500)
				.json("Passwords don't match")
				.end();
		}
	},
	//Login user and send back user data
	login: function(req, res) {
		db.Participant.find({ email: req.user.email })
			.then(results => {
				results.map(participant => {
					if (participant.userId === null || participant.userId === "") {
						db.Participant.updateOne(
							{ _id: participant._id },
							{ userId: req.user.id },
							{ new: true }
						).then(idUpdated => {
							console.log(idUpdated);
						});
					}
				});
				res.send("logged in");
			})
			.catch(err => {
				res.json(err);
			});

		res.send("logged in");
	},

	//Get current user data
	currentUser: function(req, res) {
		if (!req.user) {
			res.json({});
		} else {
			res.json({
				id: req.user.id,
				email: req.user.email
			});
		}
	},
	//Logout user
	logout: function(req, res) {
		req.logout();
		res.redirect("/");
	}
};
