const db = require("../models");

module.exports = {
  getTasks: function(req, res) {
    console.log("All Tasks:");
    db.Task.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.Task.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  createTask: function(req, res) {
    console.log("New Task:");
    db.Task.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    console.log(req.body);
  },

  updateTask: function(req, res) {
    console.log("Task Updated:");
    db.Task.findOneAndUpdate(
      {
        _id: req.params.id
      },
      req.body
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  deleteTask: function(req, res) {
    console.log("Task Deleted:");
    db.Task.findById({
      _id: req.params.id
    })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
