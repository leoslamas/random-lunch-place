const {
  Restaurants,
  Useds
} = require('../../models');

module.exports = (req, res, next) => {
    var restProm = Restaurants.findAll();
    var usedsProm = Useds.findAll();
  
    Promise.all([restProm, usedsProm])
      .then(values => {
        res.json({ yet: values[0], already: values[1] });
      });
}