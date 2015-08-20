// module.exports = [
//   {id: 1, body:"Water the plants", completed: false, listId: 1},
//   {id: 2, body:"Feed the cat", completed: true, listId: 1},
//   {id: 3, body:"Send the WDI instructors a nice card", completed: false, listId: 3}
// ]

module.exports = function(sequelize, DataTypes){
  return sequelize.define("task", {
    body: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
    listID: DataTypes.INTEGER
  })
}
