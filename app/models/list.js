module.exports = function(sequelize, Sequelize) {
  var listOfLists = squelize.define("list", {
    id: Sequelize.INTEGER,
    title: Sequelize.STRING,
  });
  return listOfLists;
}


//starter code//
////////////////

// module.exports = [
//   {id: 1, title:"Errands"},
//   {id: 2, title:"Things that are better than WDI"},
//   {id: 3, title:"WDI To-Dos"}
// ]
