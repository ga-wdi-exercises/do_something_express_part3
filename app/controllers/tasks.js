var express = require("express");
var router = express.Router();
var Task = require("../db/connection").models.Task;


function error(response, message){
  response.status(500);
  response.json({error: message})
}

router.get("/lists/:listId/tasks", function(req, res){
  List.findById(req.params.listId).then(function(list){
    res.json(list.getTasks())
  })
})

router.get("/tasks", function(req, res){
  Task.findAll().then(function(tasks){
    res.json(tasks);
  });
});

router.post("/tasks", function(req, res){
  Task.create(req.body).then(function(task){
    res.json(task);
  });
});

router.get("/tasks/:id", function(req, res){
  Task.findById(req.params.id).then(function(task){
    if(!task) return error(res, "not found");
    res.json(task);
  });
});

router.patch("/tasks/:id", function(req, res){
  Task.findById(req.params.id).then(function(task){
    if(!task) return error(res, "not found");
    task.updateAttributes(req.body).then(function(updatedTask){
      res.json(updatedTask);
    });
  });
});

router.delete("/tasks/:id", function(req, res){
  Task.findById(req.params.id).then(function(task){
    if(!task) return error(res, "not found");
    task.destroy().then(function(){
      res.json({success: true});
    });
  });
});

module.exports = router;
