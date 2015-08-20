var Sequelize = require("sequelize");
var sequelize = new Sequelize("postgress://tunr_db");
var List = sequelize.import("../models/list");
var Task = sequelize.import("../models/task");

Task.belongsTo(List);
Artist.hasMany(Song);

module.exports = {
  sql: Sequelize,
  do: sequelize,
  models: {
    Task: Task,
    List: List
  }
}
