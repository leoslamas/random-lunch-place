module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Used", {
        name: DataTypes.STRING
    })
}