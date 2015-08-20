module.exports = function(sequelize, DataTypes){
  return sequelize.define("list", {

           id:  DataTypes.INTEGER,
        title:  DataTypes.STRING,

  });
};
