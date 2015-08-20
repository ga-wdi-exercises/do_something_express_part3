module.exports = function(sequelize, Sequelize){
  return sequelize.define("list", {
    id: Sequalize.INTEGER,
    title: Sequelize.STRING
  });
}
