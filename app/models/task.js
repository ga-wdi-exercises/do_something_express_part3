module.exports = [
  {id: 1, taskText:"Water the plants", completed: false, listId: 1},
  {id: 2, taskText:"Feed the cat", completed: true, listId: 1},
  {id: 3, taskText:"Send the WDI instructors a nice card", completed: false, listId: 3}
]

// ======= ======= ======= ======= =======

var Task = sequelize.define('Task', {
  id:       Sequelize.INTEGER,
  taskText: Sequelize.STRING,
});
