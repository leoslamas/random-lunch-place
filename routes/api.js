var express = require('express');
var router = express.Router();
const {
  Restaurants,
  Useds
} = require('../models');

router.get('/restaurants', function (req, res, next) {
  var restProm = Restaurants.findAll();
  var usedsProm = Useds.findAll();

  Promise.all([restProm, usedsProm])
    .then(values => {
      res.json({ yet: values[0], already: values[1] });
    });
});

router.get('/sort', function (req, res, next) {

  res.send({
    yet: {},
    already: {},
    sorted: ""
  });
});

module.exports = router;