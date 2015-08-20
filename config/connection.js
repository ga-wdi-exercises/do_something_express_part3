var Sequelize = require("sequelize");
var sequelize = new Sequelize("postgres:///do_something");
var Task = sequelize.import("../app/models/task");
var List = sequelize.import("../app/models/list");

Task.belongsTo(List);  // Makes a foreign Id in DB
List.hasMany(Task);

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  models: {
    Task: Task,
    List: List
  }
}
