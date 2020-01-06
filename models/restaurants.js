module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Restaurants", {
        name: DataTypes.STRING
    })
}