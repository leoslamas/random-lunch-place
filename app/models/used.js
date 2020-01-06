module.exports = (sequelize, DataTypes) => {
    const Used = sequelize.define('Used', {
        name: DataTypes.STRING
    });

    return Used;
}