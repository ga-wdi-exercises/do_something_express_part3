//Created this file directly from solution to do_something_part3

var DB = require("./connection");

DB.sequelize.sync({force: true}).then(function(){
  process.exit();
});
