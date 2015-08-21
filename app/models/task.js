module.exports = function(sequelize, Sequelize){
  return sequelize.define("task", {
    body: Sequelize.STRING,
    completed: Sequelize.BOOLEAN,
    listId: Sequelize.INTEGER
  });
}
