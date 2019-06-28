const User = require("../models/user");

// Defining methods for the userController
module.exports = {
	//Sign up user
	signup: function(req, res) {
		let password = req.body.password;
		let password2 = req.body.password2;

		if (password === password2) {
			const newUser = new User(req.body);

			User.createUser(newUser, function(err, user) {
				if (err) throw err;
				console.log(user);
				res.send(user).end();
			});
		} else {
			res
				.status(500)
				.json('{errors: "Passwords don\'t match"}')
				.end();
		}
	},
	//Login user and send back user data
	login: function(req, res) {
		res.json(req.user);
		// res.send(req.session);
		// res.json("/");
		//Replace / with event dashboard route eventually
	},
	//Get current user data
	currentUser: function(req, res) {
		if (!req.user) {
			res.json({});
		} else {
			res.json({
				email: req.user.email,
				id: req.user.id
			});
		}
	},
	//Logout user
	logout: function(req, res) {
		req.logout();
		res.redirect("/");
	}
};
