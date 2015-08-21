var express = require("express");
var router = express.Router();
var List = require("../models/list")

function error(response, message){
  response.status(500);
  response.json({error: message})
}

// 1
router.get("/lists", function(req, res){
  return res.json(List);
});

// 2
router.post("/lists", function(req, res){
  List.push(req.body);
  return res.json(req.body);
});

// 3
router.get("/lists/:id", function(req, res){
  for(var l = 0; l < List.length; l++){
    if(List[l].id == req.params.id){
      return res.json(List[l]);
    }
  }
});

// 4
router.put("/lists/:id", function(req, res){
  for(var l = 0; l < List.length; l++){
    if(List[l].id == req.params.id){
      List[l] = req.body;
      return res.json(List[l]);
    }
  }
  return error(res, "not found");
});

// 5
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
