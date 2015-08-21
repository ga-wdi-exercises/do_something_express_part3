module.exports = function(sequelize, DataTypes) {
  var List = sequelize.define("list", {
    title: DataTypes.STRING
  });
  return List
};
