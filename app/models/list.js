module.exports = function(sequelize, Sequelize){
  var model = sequelize.define("list", {
    title: Sequelize.STRING
  });
  return model;
}
