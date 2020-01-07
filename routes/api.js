var express = require('express');
var router = express.Router();
const {
  Restaurants,
  Useds
} = require('../models');

router.get('/restaurants', function (req, res, next) {
  Restaurants.findAll()
    .then(rest => {
      Useds.findAll()
        .then(useds => {
          res.json({yet: rest, already: useds});
        });
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