module.exports = function(sequelize, DataTypes){
  return sequelize.define("task", {
    body: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
    listID: DataTypes.INTEGER
  })
}
