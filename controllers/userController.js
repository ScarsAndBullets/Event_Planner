const db = require("../models");
const passport = require("passport");

// Defining methods for the booksController
module.exports = {
	login: function(req, res) {
		passport.authenticate("local"),
			function(req, res) {
				res.send(req.user);
			};
	},
	signup: function(req, res) {
		let password = req.body.password;
		let password2 = req.body.password2;

		if (password === password2) {
			const newUser = new User({
				email: req.body.email,
				password: req.body.password,
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				phoneNumber: req.body.phoneNumber
			});

			User.createUser(newUser, function(err, user) {
				if (err) throw err;
				res.send(user).end();
			});
		} else {
			res
				.status(500)
				.send('{errors: "Passwords don\'t match"}')
				.end();
		}
	}
};
