var DB = require("./connection.js");
var Seeds = {
  lists: require("./list_data.json"),
  tasks: require("./task_data.json")
};

DB.models.List.bulkCreate(Seeds.lists)
.then(function(){
  return DB.models.List.findAll();
})
.then(function(lists){
  var l, list, t, task, tasks, output = [];
  for(l = 0; l < lists.length; l++){
    list = lists[l];
    tasks = Seeds.tasks[list.title];
    for(t = 0; t < tasks.length; t++){
      task = tasks[t];
      task.listId = list.id;
      output.push(task);
    }
  }
  return DB.models.Task.bulkCreate(output);
})
.then(function(){
  process.exit();
});
