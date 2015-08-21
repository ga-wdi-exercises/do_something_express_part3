module.exports = function(sequelize, Sequelize){
  var model = sequelize.define("list",  {
    //having id attribute in both models causes error?????
    listNumber: Sequelize.STRING,
    title: Sequelize.STRING
  }
  );

  return model;
}
