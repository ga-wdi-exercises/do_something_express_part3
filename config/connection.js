var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres:///todo_db');
var Task = sequelize.import('../models/task');
var List = sequelize.import('../models/list');

List.hasMany(Task);
Task.belingsTo(List);

module.exports = {
  sequalize: sequalize,
  Sequalize: Sequalize,
  models: {
    Task: Task,
    List: List
  }
};
