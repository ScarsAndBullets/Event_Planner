var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    console.log("Getting all the way to html Routes");
    db.Task.find({}).then(function(err, dbTask) {
      res.render("Signup", {
        msg: "Welcome!",
        examples: dbTask
      });
      console.log(dbTask);
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Task.findOne({ where: { id: req.params.id } }).then(function(dbTask) {
      res.render("task", {
        task: dbTask
        // Render 404 page for any unmatched routes
        // app.get("*", function(req, res) {
        //   res.render("404");
        // })
      });
    });
  });
};
