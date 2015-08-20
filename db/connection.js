var Sequelize = require("sequelize");
var sequelize = new Sequelize('postgres://nolds:password@localhost:5432/do_something_db');
// var sequelize = new Sequelize("postgres:///tunr_db");

var Task = sequelize.import("../app/models/task");
var List = sequelize.import("../app/models/list");


Task.belongsTo(List);
List.hasMany(Task);

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  models: {
    List: List,
    Task: Task
  }
}
