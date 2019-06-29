const userController = require("../controllers/userController");
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
	////// USER ROUTES //////

	// Endpoint to login user
	app.post(
		"/api/user/login",
		passport.authenticate("local"),
		userController.login
	);
	// Endpoint to sign up user
	app.post("/api/user/signup", userController.signup);
	//Get current user
	app.get("/api/user/current", userController.currentUser);
	//Logout current user
	app.get("/api/user/logout", userController.logout);
};
