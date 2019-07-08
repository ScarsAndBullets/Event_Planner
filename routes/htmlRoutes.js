var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Task.findAll({}).then(function(dbTask) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbTasks
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Task.findOne({ where: { id: req.params.id } }).then(function(dbTask) {
      res.render("task", {
        task: dbTask
          // Render 404 page for any unmatched routes
          app.get("*", function(req, res) {
            res.render("404");
          })
        });

    });
  });
}