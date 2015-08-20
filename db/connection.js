var Sequelize = require("sequelize");
var sequelize = new Sequelize("postgres:///do_something_db");
var List = sequelize.import("../app/models/list.js");
var Task = sequelize.import("../app/models/task.js");

List.hasMany(Task);
Task.belongsTo(List);

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  models: {
    List: List,
    Task: Task
  }
};
