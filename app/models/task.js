module.exports = function(sequelize, Sequelize){
  return sequelize.define("task", {
    body: Sequelize.TEXT
  });
};
