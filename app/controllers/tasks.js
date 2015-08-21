var express = require("express");
var router = express.Router();
// var DB = require("../../config/connection");
var Task = require("../models/task");
var List = require("../models/list");

function error(response, message){
  response.status(500);
  response.json({error: message})
}

// router.get("/tasks", function(req, res){
//   return res.json(Task);
// });


// Index. get all task
// router.get("/tasks", function(req, res){
//   Task.findAll({order: "id"})
// }

router.get("/tasks", function(req, res){
  var tasks;
  Task.findAll()
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