const userController = require("../controllers/userController");
const eventController = require("../controllers/eventController");
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");

const taskController = require("../controllers/taskController");

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

	////// EVENT ROUTES //////
	app.post("/api/events/create", eventController.createEvent);
	app.get("/api/events/event-dashboard", eventController.eventDashboard);

	//////TASKS ROUTES //////////////
	app.post("/api/task/create", taskController.createTask);

	app.post("/api/task/update", taskController.updateTask);
};
