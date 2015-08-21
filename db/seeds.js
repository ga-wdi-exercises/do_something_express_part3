var DB = require("./connection");
var Seeds = {
  tasks: require("./tasks_data")
}

DB.models.Task.bulkCreate(Seeds.tasks)
.then(function(){
  return DB.models.task.findAll();
})
.then(function(){
  process.exit();
});
