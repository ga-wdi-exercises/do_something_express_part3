// get dependencies
var Sequelize = require("sequelize");

// make sequelize instance; connect database
var sequelize = new Sequelize("postgres:///do_something");

// loads already created models
var List = sequelize.import("../app/models/list");
var Task = sequelize.import("../app/models/task");

// define relationships
Task.belongsTo(List);
List.hasMany(Task);

//sync the model with the database (force causes drop/recreate)
sequelize.sync({force: true}).then(function(){
  process.exit();
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  models: {
    List: List,
    Task: Task
  }
}

// ======= ======= ======= ======= =======

//sync the model with the database
sequelize.sync({ force: true }).success(function(err) {
    // insert new list
    List.create({
        id: "john",
        title: "a_secret";
    }).success(function(list) {
        console.log(list);
    });
    // insert new task
    Task.create({
        id: "john",
        taskText: "a_secret";
    }).success(function(task) {
        console.log(task);
    });
});

// initialize database connection
var sequelize = new Sequelize(
  config.name,
  config.username,
  config.password,
  config.options
);

// check database connection
sequelize.authenticate().complete(function(err) {
    if (err) {
      console.log('Unable to connect to the database:', err);
    } else {
      console.log('Connection has been established successfully.');
    }
});
