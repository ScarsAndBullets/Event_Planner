const userController = require("../controllers/userController");
const eventController = require("../controllers/eventController");
const participantController = require("../controllers/participantController");
const taskController = require("../controllers/taskController");
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const mailerController = require("./../controllers/mailerController");

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
	app.post("/api/events/:eventId/update", eventController.updateEvent);
	app.get(
		"/api/events/event-dashboard",
		isAuthenticated,
		eventController.eventDashboard
	);
	app.get("/api/events/:id", eventController.getEvent);

	//////TASKS ROUTES //////////////
	app.get("/tasks", taskController.getTasks);
	app.post("/api/tasks/create", taskController.createTask);

	app.get("/tasks/:id", taskController.findById);
	app.post("/api/tasks/assign", taskController.assignTask);
	app.post("/api/tasks/unassign", taskController.unassignTask);
	app.delete("/tasks/delete", taskController.deleteTask);

	/////// PARTICPANT ROUTES ///////
	app.post(
		"/api/events/:eventId/add-participant",
		participantController.addParticipant
	);

	app.post("/api/events/:eventId/send-mail", mailerController.sendMail);
};
