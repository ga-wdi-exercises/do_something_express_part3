module.exports = function(sequelize, Sequelize){
  var model = sequelize.define("list", {
    id: Sequelize.INTEGER,
    title: Sequelize.STRING
  },
  {
    instanceMethods: {
      shout: function(){
        console.log("My name title " + this.title);
      }
    }
  }
  );
  model.sing = function(){
    console.log("Tra la la!");
  }
  return model;
}
