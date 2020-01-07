var express = require('express');
var router = express.Router();
const { Restaurants, Used } = require('../app/models');

router.get('/restaurants', function (req, res, next) {
  var rest = {};
  var used = {};

  var r = Restaurants.findAll()
    .then((result) => {
      rest = result;
    });

  var u = Used.findAll()
    .then((result) => {
      used = result;
    });

  await Promise.all([r, u]);

  res.send({ yet: rest, already: used });
});

router.get('/sort', function (req, res, next) {

  res.send({
    yet: {},
    already: {},
    sorted: ""
  });
});

module.exports = router;