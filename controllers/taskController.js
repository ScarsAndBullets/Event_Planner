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
    db.Task.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  deleteTask: function(req, res) {
    console.log("Task Deleted:");
    db.Task.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

// const { ObjectID } = require("mongodb");
// //const _ = require("lodash");
// const db = require("../models");
// //let { Task } = require("../models/task");

// let taskController = {};

// taskController.addTask = [
//   function(req, res) {
//     console.log("New Task:");
//     let task = new db.Task({
//       taskName: req.body.text,
//       strikeThrough: false
//     });
//     task.save().then(
//       doc => {
//         res.send(doc);
//         console.log(doc);
//       },
//       event => {
//         res.status(400).send(event);
//       }
//     );
//   }
// ];

// taskController.getTasks = [
//   function(req, res) {
//     console.log("All Tasks:");
//     db.Task.find(req.query)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
// ];

// taskController.getOneTask = [
//   function(req, res) {
//     let id = req.params.id;

//     if (!ObjectID.isValid(id)) {
//       return res.status(404).send();
//     }

//     Task.findOne({
//       _id: id
//     })
//       .then(task => {
//         if (!task) {
//           return res.status(404).send();
//         }
//         res.send({ task });
//       })
//       .catch(event => {
//         res.status(400).send();
//       });
//   }
// ];

// taskController.deleteOneTask = [
//   function(req, res) {
//     console.log("Task Deleted:");
//     let id = req.params.id;

//     if (!ObjectID.isValid(id)) {
//       return res.status(404).send();
//     }
//     Task.findOneAndRemove({
//       _id: id
//     })
//       .then(task => {
//         if (!task) {
//           return res.status(404).send();
//         }
//         res.send({ task });
//       })
//       .catch(event => {
//         res.status(400).send();
//       });
//   }
// ];

// taskController.saveOneTask = [
//   function(req, res) {
//     let id = req.params.id;

//     Task.findById(id, function(err, task) {
//       if (err) {
//         res.status(400).send(err);
//       } else {
//         task.completed = req.body.completed;

//         task.save(function(err, task) {
//           if (err) {
//             tes.status(400).send(err);
//           }
//           res.send(task);
//         });
//       }
//     });
//   }
// ];

// module.exports = taskController;

// createTask: function(req, res) {
//   // db.Task.create({
//   //   taskName: req.body.taskName,
//   //   //description:req.body.description
//   //   strikeThrough: false
//   // })
//   db.Task.save(err => {
//     if (err) return res.status(500).send(err);
//     return res.status(200).send({
//       taskName: req.body.taskName,
//       strikeThrough: false
//     });
//   });
// },
