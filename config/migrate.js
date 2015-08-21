var DB = require("./connection");

// Sync updates the tables with any modifications to the models
DB.sequelize.sync({force: true}).then(function(){
  process.exit();
});
