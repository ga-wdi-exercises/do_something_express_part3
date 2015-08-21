module.exports = function(sequelize, Sequelize){
  var model = sequelize.define("task", {
    body: Sequelize.STRING,
    completed: Sequelize.BOOLEAN
  })
}



// 
// [
//   {id: 1, body:"Water the plants", completed: false, listId: 1},
//   {id: 2, body:"Feed the cat", completed: true, listId: 1},
//   {id: 3, body:"Send the WDI instructors a nice card", completed: false, listId: 3}
// ]
