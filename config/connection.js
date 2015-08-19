var Sequelize = require("sequelize");
var sequelize = new Sequelize("postgres:///task_db");
var Task = sequelize.import("../app/models/task.js");
var List = sequelize.import("../app/models/list.js");

Task.belongsTo(List);
List.hasMany(Task);

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  models: {
    Task: Task,
    List: List
  }
}
