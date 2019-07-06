const passport = require("passport");
const User = require("../models/user");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
	new LocalStrategy({ usernameField: "email" }, function(
		email,
		password,
		done
	) {
		User.getUserByEmail(email, function(err, user) {
			if (err) throw err;
			if (!user) {
				return done(null, false, { message: "Email does not exist" });
			}
			User.comparePassword(password, user.password, function(err, isMatch) {
				if (err) throw err;
				if (isMatch) {
					user = {
						id: user.id,
						email: user.email,
						firstName: user.firstName,
						lastName: user.lastName,
						phoneNumber: user.phoneNumber
					};
					return done(null, user);
				} else {
					return done(null, false, { message: "Incorrect password" });
				}
			});
		});
	})
);
passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(id, done) {
	User.getUserById(id, function(err, user) {
		done(err, user);
	});
});

module.exports = passport;
