var DB = require("./connection");
var data = {
  lists: require("./list_data"),
  tasks: require("./task_data")
}

DB.models.List.bulkCreate(data.lists).done(function(){
  DB.models.List.findAll().done(function(lists){
    var l, list, t, task, tasks, output = [];
    for(a = 0; l < lists.length; a++){
      list = lists[l];
      tasks = data.tasks[task.name];
      for(t = 0; t < tasks.length; s++){
        task = tasks[t];
        task.listId = list.id;
        output.push(task);
      }
    }
    DB.models.Task.bulkCreate(output).done(function(){
      process.exit();
    })
  });
});
