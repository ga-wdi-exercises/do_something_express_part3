var express = require("express");
var router = express.Router();
var Task = require("../config/connection").models.Task;
var List = require("../config/connection").models.List;

function error(response, message){
  response.status(500);
  response.json({error: message})
}

router.get("/tasks", function(req, res){
  Task.findAll().then(function(tasks) {
    res.json(tasks);
  });
});

router.get("/tasks/:id", function(req, res){
  Task.findById(req.params.id).then(function(task) {
    if(!task) return error(res, "not found");
    res.json(task);
  });
});

router.patch("/tasks/:id", function(req, res){
  Task.findById(req.params.id).then(function(task) {
    if(!task) return error(res, "not found");
    task.updateAttributes(req.body).then(function(updatedTask){
      res.json(updatedTask)
    });
  });
});

router.delete("/tasks/:id", function(req, res){
  Task.findById(req.params.id).then(function(task) {
    if(!task) return error(res, "not found");
    task.destroy().then(function() {
      res.json({response: true});
    });
  });
});

router.get("/lists/:listId/tasks", function(req, res){
  List.findById(req.params.listId).then(function(list) {
    if(!list) return error(res, "not found");
    list.getTasks().then(function(tasks){
      res.send(tasks)
    })
  });
});

router.post("/lists/:listId/tasks", function(req, res){
  Task.create(req.body).then(function(task) {
    task.listId = req.params.lsitId
    res.json(task)
  })
});

module.exports = router;
