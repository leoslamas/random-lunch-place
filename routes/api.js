var express = require('express');
var router = express.Router();
const {
  Restaurants,
  Useds
} = require('../models');

//restaurants
router.get('/restaurants', function (req, res, next) {
  var restProm = Restaurants.findAll();
  var usedsProm = Useds.findAll();

  Promise.all([restProm, usedsProm])
    .then(values => {
      res.json({ yet: values[0], already: values[1] });
    });
});

//sort
router.get('/sort', function (req, res, next) {
  var restProm = Restaurants.findAll();
  var usedsProm = Useds.findAll();

  Promise.all([restProm, usedsProm])
    .then(values => {
      var today = new Date();
      var rests = values[0];
      var useds = values[1];

      if (useds.length > 0) {
        var lastUsed = useds[useds.length-1];
      } else {
        var lastUsed = { name: "", date: new Date() };
      }
      
      var nextRest = rests[Math.floor(Math.random() * rests.length)];
      
      if (today.getDate() !== lastUsed.date.getDate() && today.getMonth() !== lastUsed.date.getMonth()) {
        
        Useds.create({ name: nextRest.name, date: new Date() })
          .then(rest => {

            Restaurants.destroy({ where: { name: rest.name } })
              .then(destroyed => {

                useds.push({ id: rest.id, name: rest.name, date: new Date() })
                rests = rests.filter(item => item.id !== rest.id);

                res.json({ yet: rests, already: useds, sorted: nextRest.name });
              });
          });

      } else {
        res.json({ yet: rests, already: useds, sorted: lastUsed.name });
      }
    });
});

module.exports = router;