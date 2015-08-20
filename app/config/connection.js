var Sequelize = require("sequelize");
var sequelize = new Sequelize("postgres:///do_something_db");
var List = sequelize.import("../models/list");
var Task = sequelize.import("../models/task");

List.hasMany(Task);
Task.belongsTo(List);

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  models: {
    List: List,
    Task: Task
  }
}
