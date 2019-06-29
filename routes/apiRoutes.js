<<<<<<< HEAD
var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/tasks", function(req, res) {
    db.Task.findAll({}).then(function(dbTasks) {
      res.json(dbTasks);
    });
  });

  // Create a new example
  app.post("/api/tasks", function(req, res) {
    db.Task.create(req.body).then(function(dbTask) {
      res.json(dbTask);
    });
  });

  // Delete an example by id
  app.delete("/api/tasks/:id", function(req, res) {
    db.Task.destroy({ where: { id: req.params.id } }).then(function(dbTask) {
      res.json(dbTask);
    });
  });
=======
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
>>>>>>> bcd9e3023a18e413f1f6ca6497a5b0aa4303270e
};
