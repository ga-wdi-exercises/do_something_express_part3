module.exports = [
  {id: 1, title:"Errands"},
  {id: 2, title:"Things that are better than WDI"},
  {id: 3, title:"WDI To-Dos"}
]

// ======= ======= ======= ======= =======

var List = sequelize.define('List', {
  id:    Sequelize.INTEGER,
  title: Sequelize.STRING,
});
