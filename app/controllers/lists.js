var express = require("express");
var router = express.Router();
var List = DB.models.List;
var DB = require("../../config/connection");
var Task = DB.models.Task;

function error(response, message){
  response.status(500);
  response.json({error: message})
}

//get lists
router.get("/lists", function(req, res){
  Task.findAll({order: "id"}).then(function(tasks){
    return res.json(Task);
  }
});

//post lists
router.post("/lists", function(req, res){
  List.push(req.body);
  return res.json(req.body);
});

//get /lists/:id
router.get("/lists/:id", function(req, res){
  for(var l = 0; l < List.length; l++){
    if(List[l].id == req.params.id){
      return res.json(List[l]);
    }
  }
});
//put /lists/:id
router.put("/lists/:id", function(req, res){
  for(var l = 0; l < List.length; l++){
    if(List[l].id == req.params.id){
      List[l] = req.body;
      return res.json(List[l]);
    }
  }
  return error(res, "not found");
});
//delete /lists/:id
router.delete("/lists/:id", function(req, res){
  for(var l = 0; l < List.length; l++){
    if(List[l].id == req.params.id){
      delete List[l];
      return res.json(List[l]);
    }
  }
  return error(res, "not found");
});

module.exports = router;
