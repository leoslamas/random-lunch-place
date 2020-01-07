module.exports = (sequelize, DataTypes) => {
    const Restaurants = sequelize.define('Restaurants', {
        name: DataTypes.STRING
    }, {
        timestamps: false
    });

    return Restaurants;
}