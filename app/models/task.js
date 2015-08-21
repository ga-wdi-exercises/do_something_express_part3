module.exports = function(sequelize, Sequelize){
  return sequelize.define("task", {
    body: Sequelize.STRING,
    listId: Sequelize.INTEGER
  });
}
