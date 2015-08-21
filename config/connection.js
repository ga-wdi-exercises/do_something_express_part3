var Sequelize = require("sequelize")
var sequelize = new Sequelize("postgres:///dosomething_db")
var list = sequelize.import("../models/list");
var Task = sequelize.import("../models/taks");

Task.belongsTo(List);
List.hasMany(Song);

module.exports = {
  Sequelize: sequelize,
  sequelize: sequelize,
  models: {
    Task: Task,
    List, List
  }
}
