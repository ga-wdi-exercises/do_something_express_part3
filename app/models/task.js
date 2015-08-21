module.exports = function(sequelize, Sequelize){
  return sequelize.define("task", {
    body: Sequelize.TEXT,
    completed: Sequelize.BOOLEAN,
    listId: Sequelize.INTEGER
  });
}

// [
//   {id: 1, body:"roto-root the shower drain", completed: true, listId: 1},
//   {id: 2, body:"grease rear axle on the Biscayne", completed: false, listId: 1},
//   {id: 3, body:"replant flag at Sea of Tranquility", completed: false, listId: 3}
// ]
