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
  var l, list, t, task, tasks, output = [];
  for(l = 0; l < lists.length; l++){
    list = lists[l];
    console.log(list.listNumber);
    tasks = Seeds.tasks[list.listNumber];
    console.log(tasks);
    for(t = 0; t < tasks.length; t++){
      task = tasks[t];
      task.listId = list.listNumber;
      output.push(task);
    }
  }
  return DB.models.Task.bulkCreate(output);
})
.then(function(){
  process.exit();
});
