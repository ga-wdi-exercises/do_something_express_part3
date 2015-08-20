module.exports = function(sequelize, Sequelize){
  return sequelize.define("task", {
    id: Sequelize.INTEGER,
    title: Sequelize.STRING,
    completed: Sequelize.BOOLEAN,
    listId: Sequelize.INTEGER
  });
}
