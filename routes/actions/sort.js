const db = require('../../models');
const {
  Restaurants,
  Useds
} = require('../../models');

module.exports = (req, res, next) => {
    var restProm = Restaurants.findAll();
    var usedsProm = Useds.findAll();

    Promise.all([restProm, usedsProm])
        .then(values => {
            var today = new Date();
            var rests = values[0];
            var useds = values[1];

            if (useds.length > 0) var lastUsed = useds[useds.length - 1];

            var nextRest = rests[Math.floor(Math.random() * rests.length)];

            if (lastUsed == undefined || (today.getDate() !== lastUsed.date.getDate() || today.getMonth() !== lastUsed.date.getMonth())) {

                db.sequelize.transaction(t => {

                    return Promise.all([
                        Useds.create({
                            name: nextRest.name,
                            date: new Date()
                        }),
                        Restaurants.destroy({
                            where: {
                                name: nextRest.name
                            }
                        })
                    ])

                }).then(result => {
                    var used = result[0];

                    useds.push(used);
                    rests = rests.filter(item => item.id !== nextRest.id);

                    res.json({
                        yet: rests,
                        already: useds,
                        sorted: nextRest.name
                    });
                });

            } else {

                res.json({
                    yet: rests,
                    already: useds,
                    sorted: lastUsed.name
                });
            }
        });
}