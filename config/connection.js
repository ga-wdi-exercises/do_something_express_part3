var Sequelize = require("sequelize");
var sequelize = new Sequelize("postgres:///do_something_express_db");
var Artist = sequelize.import("../models/list");
var Song = sequelize.import("../models/task");

List.hasMany(Task);
Task.belongsTo(List);

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  models: {
    List: listsController,
    Task: Task
  }
}
