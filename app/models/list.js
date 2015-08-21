// module.exports = [
//   {id: 1, title:"Errands"},
//   {id: 2, title:"Things that are better than WDI"},
//   {id: 3, title:"WDI To-Dos"}
// ]
module.exports = function(sequelize, DataTypes){
  return sequelize.define("list", {

           id:  DataTypes.INTEGER,
        title:  DataTypes.STRING,

  });
};
