var express = require("express");
var router = express.Router();
var DB = require("../../config/connection");  // pulling in info in database
var Task = DB.models.Task;
var List = DB.models.List;

function error(response, message){
  response.status(500);
  response.json({error: message})
}

router.get("/tasks", function(req, res){
  Task.findAll({order: "id"}).then(function(tasks){ // For sequelize
    res.json(Task);  // Express
  })
});

router.get("/tasks/:id", function(req, res){
  Task.findById(req.params.taskId).then(function(){
    res.json(task);
  });
});

router.put("/tasks/:id", function(req, res){
  Task.findById(req.params.taskId).then(function(){
  if(!task) return error(res, "not found");
  task.updateAttributes(req.body).then(function(task){
    res.json(task);
    })
  })
});

router.delete("/tasks/:id", function(req, res){
  Task.findById(req.params.taskId).then(function(task){
    if(!task) return error(req, "not found");
    task.destroy().then(function(db_res){
      res.json(db_res);
    })
  })
});

router.get("/lists/:listId/tasks", function(req,res){
  List.findById(req.params.listId).then(function(list){
    if(!list) return error(res, "not found");
    return list.getTasks(); // sequelize function created b/c of associatio in connection???
  }).then(function(tasks){
    res.json(tasks);
  });
});

router.post("/lists/:listId/tasks", function(req, res){
  List.findById(req.params.listId).then(function(list){
    if(!list) return error(res, "not found");
    return list.createTask(req.body);  // sequelize function created b/c of associatio in connection???
  }).then(function(tasks){
    res.json(tasks);
  })
});

module.exports = router;
