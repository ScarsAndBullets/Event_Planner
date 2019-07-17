const db = require("../models/");

module.exports = {
  getAllTasks: function(req, res) {
    Task.find(function(err, tasks) {
      if (err) {
        console.log(err);
      } else {
        res.json(tasks);
        console.log(tasks);
      }
    });
  },

  createTask: function(req, res) {
    // db.Task.create({
    //   taskName: req.body.taskName,
    //   //description:req.body.description
    //   strikeThrough: false
    // })
    db.Task.save(err => {
      if (err) return res.status(500).send(err);
      return res.status(200).send({
        taskName: req.body.taskName,
        strikeThrough: false
      });
    });
  },

  updateTask: function(req, res) {
    db.Task.findByIdAndUpdate(
      // the id of the item to find
      req.params.taskId,

      { new: true },
      (err, taskId) => {
        if (err) return res.statu(500).send(err);
        return res.send(todo);
      }
    );
  },
  deleteTask: function(req, res) {
    db.Task.findByIdAndDelete(
      // the id of the item to find
      req.params.taskId,

      { new: false },
      (err, taskId) => {
        if (err) return res.statu(500).send(err);
        return res.send(todo);
      }
    );
  }
};
