//go get the connection.js file and run it
var DB = require("./connection");

//sync model with database (have to set up basic models before we can do this)
DB.sequelize.sync({force: true}).then(function(){
  process.exit();
});
