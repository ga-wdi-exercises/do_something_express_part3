//var DB = require("./connection");
var Sequalize = require("sequelize");
var sequalize = new Sequelize('postgres:///doSomething_db');
var List = sequelize.import('../../app/models/list');
var Task = sequalize.import ('../../app/models/task');

Task.belongsTo(List);
List.hasMany(Task);

module.exports = {
  sql: Sequelize,
  do: sequelize,
  models: {
    Song: Song,
    Artist: Artist
  }
}
