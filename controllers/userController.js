const db = require("../models/");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const secret = "mysecretsshhh";
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
					if (participant.userId === null) {
						db.Participant.updateOne(
							{ _id: participant._id },
							{
								userId: req.user._id,
								name: `${req.user.firstName} ${req.user.lastName}`
							},
							{ new: true }
						).then(idUpdated => {
							console.log(idUpdated);
						});
					}
				});
				// Issue token/cookie
				const payload = req.user;
				const token = jwt.sign(payload, secret, {
					expiresIn: "1h"
				});
				res
					.cookie("token", token, { httpOnly: true })
					.status(200)
					.json(payload);
			})
			.catch(err => {
				res.json(err);
			});
	},

	//Get current user data
	currentUser: function(req, res) {
		if (!req.user) {
			res.send(null);
		} else {
			res.json(req.user);
		}
	},
	//Logout user
	logout: function(req, res) {
		req.logout();
		res.redirect("/");
	}
};
