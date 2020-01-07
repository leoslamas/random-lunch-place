module.exports = (sequelize, DataTypes) => {
    const Used = sequelize.define('Used', {
        name: DataTypes.STRING
    }, {
        timestamps: false
    });

    return Used;
}