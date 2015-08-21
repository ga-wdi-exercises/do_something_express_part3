//require dependency
var Sequelize = require("sequelize");

//make an instance of Sequelize and store it in a variable and connect to the database
var sequelize = new Sequelize("postgres///do_something_db");

//import models
var List = sequelize.import("../app/models/list");
var Task = sequelize.import("../app/models/task");

//relationships
Task.belongsto(List);
List(hasmany(Task);


//module.exports is how we do seperation of concerns in express
//think of this file as function where module.exports is the return
module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  models: {
    List: List,
    Task: Task
  }
}
