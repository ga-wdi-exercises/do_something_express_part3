var express = require("express");
var router = express.Router();
var Task = require("../models/task");
var List = require("../models/list");

function error(response, message){
  response.status(500);
  response.json({error: message})
}

// router.get("/tasks", function(req, res){
//   return res.json(Task);
// });

router.get("/tasks", function(req, res){
  var tasks;
  Task.findAll()
  .then(function(s){
    tasks = s;
    return List.findAll()
  })

  .then(function(lists){
    res.render("tasks/index", {tasks: tasksWithListNames(tasks, lists)});
  });
});

// router.get("/tasks/:id", function(req, res){
//   for(var t = 0; t < Task.length; t++){
//     if(Task[t].id == req.params.id){
//       return res.json(Task[t]);
//     }
//   }
//   return error(res, "not found");
// });

router.get("/tasks/:id", function(req, res){
  var task;
  Task.findById(req.params.id)
  .then(function(s){
    if(!s) return error(res, "Not found.");
    task = s;
    return task.getList();
  })

  .then(function(list){
    task.listName = list.name;
    res.render("tasks/show", {task: task});
  });
});

// router.put("/tasks/:id", function(req, res){
//   for(var t = 0; t < Task.length; t++){
//     if(Task[t].id == req.params.id){
//       Task[t] = req.body;
//       return res.json(Task[t]);
//     }
//   }
//   return error(res, "not found");
// });

router.put("/tasks/:id", function(req, res){
  var task;
  if(!req.body.listId) return error(res, "List not found.");
  Task.findById(req.params.id)
  .then(function(s){
    if(!s) return error(res, "not found");
    task = s;
    return task.updateAttributes(req.body);
  })

  .then(function(updatedTask){
    res.redirect("/tasks/" + updatedTask.id);
  });
});

// router.delete("/tasks/:id", function(req, res){
//   for(var t = 0; t < Task.length; t++){
//     if(Task[t].id == req.params.id){
//       delete Task[t];
//       return res.json({"success": true});
//     }
//   }
//   return error(res, "not found");
// });

router.delete("/tasks/:id", function(req, res){
  Task.findById(req.params.id)
  .then(function(task){
    if(!task) return error(res, "Not found.");
    return task.destroy();
  })

  .then(function(){
    res.redirect("/tasks");
  });
});

// router.get("/lists/:listId/tasks", function(req, res){
//   var tasks = [];
//   for(var t = 0; t < Task.length; t++){
//     if(Task[t].listId == req.params.listId){
//       tasks.push(Task[t]);
//     }
//   }
//   return res.json(tasks);
// });

router.get("/lists/:listId/tasks", function(req, res){
  List.findById(req.params.listId)
  .then(function(list){
    if(!list) return error(res, "Not found.");
    return list.getTasks();
  })
  .then(function(tasks){
    res.json(tasks);
  });
});

// router.post("/lists/:listId/tasks", function(req, res){
//   var task;
//   for(var l = 0; l < List.length; l++){
//     if(List[l].id == req.params.listId){
//       task = req.body;
//       task.listId = req.params.listId;
//       Task.push(task);
//       return res.json(task);
//     }
//   }
//   return error(res, "not found");
// });

router.post("/lists/:listId/tasks", function(req, res){
  List.findById(req.params.listId)
  .then(function(list){
    if(!list) return error(res, "Not found.");
    return list.createTask(req.body);
  })
  .then(function(tasks){
    res.json(tasks);
  });
});

module.exports = router;