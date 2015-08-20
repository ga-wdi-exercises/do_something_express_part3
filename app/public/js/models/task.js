module.exports = function(sequelize, DataTypes){
  return sequelize.define("task", {
    id: DataTypes.INTEGER,
    body: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
    listId: DataTypes.STRING
  });
}
