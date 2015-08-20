var DB = require("./connection");

DB.sequelize.sync({force: true}).then(function(){ // force: true drops your database
  process.exit(); // forces node to shut off
});

// this is the association
