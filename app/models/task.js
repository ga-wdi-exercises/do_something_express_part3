module.exports = function(sequelize, Sequelize) {
    var model = sequelize.define("task", {
        body: Sequelize.STRING,
        completed: Sequelize.BOOLEAN,
        listId: Sequelize.INTEGER
    }, {
    })
    return model
}
