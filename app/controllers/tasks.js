var express = require("express");
var router = express.Router();
var DB = require("../../config/connection");
var Task = DB.models.Task;
var List = DB.models.List;

function error(response, message){
  response.status(500);
  response.json({error: message})
}

router.get("/tasks", function(req, res){
  Task.findAll().then(function(tasks){
      return res.json(tasks);
  })
});

router.get("/tasks/:id", function(req, res){
  Task.findById(req.params.id).then(function(task){
      return res.json(task);
  })
});

router.put("/tasks/:id", function(req, res){
  Task.findById(req.params.id).then(function(task){
    if(!task) return error(res, "not found");
  return task.updateAttributes(req.body)
})
    .then(function(task){
    return res.json(task);
});
});

router.delete("/tasks/:id", function(req, res){
  Task.findById(req.params.id)
    .then(function(task){
      if(!task) return error(res, "not found");
      return task.destroy()
    })
    .then(function(task){
      return res.json(task)
});
});
// utilized solution branch to solve similar start to the lists controller but it looks like .get and .create can but used to read and create when they belong to another model
router.get("/lists/:listId/tasks", function(req, res){
  List.findById(req.params.id).then(function(list){
      if(!list) return error(res, "not found");
      return list.getTasks();
    })
  .then(function(tasks){
  return res.json(tasks);
});
});

router.post("/lists/:listId/tasks", function(req, res){
  List.findById(req.params.id).then(function(list){
      if(!list) return error(res, "not found");
      return list.createTask(req.body);
    })
  .then(function(tasks){
  return res.json(tasks);
  });
  });

module.exports = router;
