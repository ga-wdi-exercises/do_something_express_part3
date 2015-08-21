var express = require("express");
var router = express.Router();

var List = require("../models/list")

function error(response, message){
  response.status(500);
  response.json({error: message})
};

// router.get("/lists", function(req, res){
//   return res.json(List);
// });

router.get("/lists", function(req, res){
  List.findAll({order: "id"}).then(function(lists){
    res.json(lists);
  });
});

// router.post("/lists", function(req, res){
//   List.push(req.body);
//   return res.json(req.body);
// });

router.post("/lists", function(req, res){
  List.create(req.body).then(function(list){
    res.redirect("/lists/" + list.id)
  });
});

// router.get("/lists/:id", function(req, res){
//   for(var l = 0; l < List.length; l++){
//     if(List[l].id == req.params.id){
//       return res.json(List[l]);
//     }
//   }
// });

router.get("/lists/:id", function(req, res){
  var list;
  List.findById(req.params.id)
});

// router.put("/lists/:id", function(req, res){
//   for(var l = 0; l < List.length; l++){
//     if(List[l].id == req.params.id){
//       List[l] = req.body;
//       return res.json(List[l]);
//     }
//   }
//   return error(res, "not found");
// });

router.put("/lists/:id", function(req, res){
  var updatedList, songs;
  List.findById(req.params.id)
});

// router.delete("/lists/:id", function(req, res){
//   for(var l = 0; l < List.length; l++){
//     if(List[l].id == req.params.id){
//       delete List[l];
//       return res.json(List[l]);
//     }
//   }
//   return error(res, "not found");
// });

router.delete("/lists/:id", function(req, res){
  List.findById(req.params.id)
  .then(function(list){
    if(!list) return error(res, "Not found.");
    return list.destroy()
  })
  .then(function(){
    res.redirect("/lists")
  });
});

module.exports = router;