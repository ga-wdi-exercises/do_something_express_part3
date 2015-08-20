module.exports = function (sequelize, Sequelize) {
  var model = sequelize.define("task", {
    body: Sequelize.STRING,
    completed: Sequelize.BOOLEAN
  });
  return model;
};
