var express = require("express");
var router = express.Router();
// make sure the connection.js links to the controller
var DB = require("../../config/connection");
// similar to ruby allow for methods in the DB to be called on the model
var List = DB.models.List;

function error(response, message){
  response.status(500);
  response.json({error: message})
}
// use findAll to get all Lists then I want it to return the lists the findAll found
router.get("/lists", function(req, res){
  List.findAll().then(function(lists){
  return res.json(lists);
    });
});
// use create to reference the form then take that data to make a new List
router.post("/lists", function(req, res){
  List.create(req.body).then(function(list){
  return res.json(list);
});
});
// find a specific list by searching via it's ID then show that specific list
router.get("/lists/:id", function(req, res){
  List.findById(req.params.id).then(function(a){
      return res.json(a);
    });
});
// find a specific list by searching via it's ID then if that lists ID matches the ID in the DB update it via the form body info then display the lists
router.put("/lists/:id", function(req, res){
  List.findById(req.params.id).then(function(list){
    if(!list) return error(res, "not found");
    return list.updateAttributes(req.body)
  })
      .then(function(list){
      return res.json(list);
  });
});
// find a specific list by searching via it's ID then if that lists ID matches the ID in the DB delete it and display the lists
router.delete("/lists/:id", function(req, res){
  List.findById(req.params.id)
    .then(function(list){
      if(!list) return error(res, "not found");
      return list.destroy()
    })
    .then(function(list){
      return res.json(list)
});
});

module.exports = router;
