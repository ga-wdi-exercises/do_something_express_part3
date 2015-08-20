var tasks = [
            {id: 1, body:"Water the plants", completed: false, listId: 1},
            {id: 2, body:"Feed the cat", completed: true, listId: 1},
            {id: 3, body:"Send the WDI instructors a nice card", completed: false, listId: 3}
            ]

module.exports = function(sequelize, Sequelize){
  return sequelize.define("task", {
    body: Sequelize.STRING,
    completed: Sequelize.BOOLEAN // are we not using this in our table???  Not in solution
  });
}
