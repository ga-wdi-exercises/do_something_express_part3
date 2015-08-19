var Sequelize = require("sequelize");
var sequelize = new Sequelize("postgres:///do_something");
var Task = sequelize.import("../app/models/task");

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  models: {
    Task: Task,

  }
}
