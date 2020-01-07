module.exports = (sequelize, DataTypes) => {
    const Useds = sequelize.define('Useds', {
        name: DataTypes.STRING
    }, {
        timestamps: false
    });

    return Useds;
}