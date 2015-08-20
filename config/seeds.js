var DB = require("./connection");
var Seeds = {
  lists: require("./list_data"),
  tasks: require("./task_data")
}

DB.models.List.bulkCreate(Seeds.lists)
.then(function(){
  return DB.models.List.findAll();
})
.then(function(lists){
  var a, list, s, task, tasks, output = [];
  for(a = 0; a < lists.length; a++){
    list = lists[a];
    tasks = Seeds.tasks[list.name];
    for(s = 0; s < tasks.length; s++){
      task = tasks[s];
      task.listId = list.id;
      output.push(task);
    }
  }
  return DB.models.Task.bulkCreate(output);
})
.then(function(){
  process.exit();
});
