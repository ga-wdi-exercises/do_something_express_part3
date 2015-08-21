var Sequelize = require("sequelize");
// Create a Sequelize instance that connects to the do_something database
// (we could creat more of these to connect to more databases)
var sequelize = new Sequelize("postgres:///do_something");

// Essentially requiring models, prior to linking them with associations (see below)
var List = sequelize.import("../app/models/list");
var Task = sequelize.import("../app/models/task");

// Establishing associations between models
// declared here instead of in the models, like in Ruby
Task.belongsTo(List);
List.hasMany(Task);

// Export so that the models are useable
module.exports = {

  Sequelize: Sequelize,
  sequelize: sequelize,
  models: {
    List: List,
    Task: Task

  }
