var express = require("express");
var router = express.Router();
var List = require("../../config/connection").models.List

function error(response, message){
  response.status(500);
  response.json({error: message})
}

router.get("/lists", function(req, res){
  List.findAll().then( function( lists ) {
    res.json(lists);
  })
});

router.post("/lists", function(req, res){
  List.create(req.body).then(function(list) {
    res.json(list);
  });
});

router.get("/lists/:id", function(req, res){
  List.findById(req.params.id).then(function(list) {
    if(!list) return error(res, "not found");
    res.json(list);
  })
});

router.put("/lists/:id", function(req, res){
  List.findById(req.params.id).then(function(list) {
    if(!list) return error(res, "not found");
    list.updateAttributes(req.body).then(function(updateList) {
      res.json(updateList);
    })
  })
});

router.delete("/lists/:id", function(req, res){
  List.findById(req.params.id).then(function(list) {
    if(!list) return error(res, "not found");
    list.destroy().then(function() {
      res.json({success: true});
    })
  })
});

module.exports = router;
