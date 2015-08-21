//Sequelize = Sqeuelize itself
//sequelize = Sequelize's connection to the database

module.exports = function(sequelize, Sequelize){
  var model = sequelize.define ("task", {
    title: sequelize.STRING,
  });
}


//confused about why this was listed in starter code
// module.exports = [
//   {id: 1, body:"Water the plants", completed: false, listId: 1},
//   {id: 2, body:"Feed the cat", completed: true, listId: 1},
//   {id: 3, body:"Send the WDI instructors a nice card", completed: false, listId: 3}
// ]
