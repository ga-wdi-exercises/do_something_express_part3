var DB = require("./connection");
// set force to true to drop the table before creating it - defaults to false
DB.sequelize.sync({force: true}).then(function(){
  //forces the sequelize to exit process - does not happen without this
  process.exit();
});
