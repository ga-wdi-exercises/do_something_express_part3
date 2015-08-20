var express = require("express");
var router = express.Router();
var DB = require("../../config/connection");
var List = require("../models/list")

function error(response, message){
  response.status(500);
  response.json({error: message})
}

router.get("/lists", function(req, res){
  List.findAll({order: "id"}).then(function(lists){
    res.json(list);
  });
});

router.post("/lists", function(req, res){
  List.create(req.body).then(function(list){
    res.json(list);
  });
});

router.get("/lists/:id", function(req, res){

  List.findById(req.params.id).then(function(list){
    res.json(list);
  });

  //Commenting out code from homework 2

  // for(var l = 0; l < List.length; l++){
  //   if(List[l].id == req.params.id){
  //     return res.json(List[l]);
  //   }
  // }
});

router.put("/lists/:id", function(req, res){

  List.findById(req.params.id)
  .then(function(list{
    if(!list) return error(res, "not found");
    return list.updateAttributes(req.body);
  })
  .then(function(list){
    res.json(list);
  });

  // for(var l = 0; l < List.length; l++){
  //   if(List[l].id == req.params.id){
  //     List[l] = req.body;
  //     return res.json(List[l]);
  //   }
  // }
});

router.delete("/lists/:id", function(req, res){

  List.findById(req.params.id)
  .then(function(list){
    if(!list) return error(res, "not found");
    return list.destroy()
  })
  .then(function(list){
    res.json(list)
  });

  // for(var l = 0; l < List.length; l++){
  //   if(List[l].id == req.params.id){
  //     delete List[l];
  //     return res.json(List[l]);
  //   }
  // }
  // return error(res, "not found");
});

module.exports = router;
