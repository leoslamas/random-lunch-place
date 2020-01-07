module.exports = (sequelize, DataTypes) => {
    const Useds = sequelize.define('Useds', {
        name: DataTypes.STRING,
        date: DataTypes.DATE
    }, {
        timestamps: false
    });

    return Useds;
}