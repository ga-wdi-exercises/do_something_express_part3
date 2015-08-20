module.exports = function(sequelize, Sequelize){
  var model = sequelize.define("list", {
    title: Sequelize.STRING
  },
  {
    instanceMethods: {
      publish: function(){
        console.log("I am list " + this.title);
      }
    }
  }
  return model;
}
