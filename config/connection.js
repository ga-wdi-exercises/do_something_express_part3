var Sequelize = require("sequelize");
var sequelize = new Sequelize("postgres:///something_db");
var List = sequelize.import("../models/list");
var Tast = sequelize.import("../models/task");

Task.belongsTo(List);
List.hasMany(Task);

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  models: {
    List: List,
    Tast: Task
  }
}