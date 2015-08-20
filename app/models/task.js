module.exports = function(sequelize, Sequelize){
  return sequelize.define("task", {
    id: Sequalize.INTEGER,
    body: Sequalize.STRING,
    completed: Sequalize.BOOLEAN,
    listID: Sequalize.INTEGER
  });
}
