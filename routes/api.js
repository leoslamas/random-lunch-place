var express = require('express');
var router = express.Router();
const { Restaurants, Used } = require('../app/models');

router.get('/restaurants', function(req, res, next) {
  var rest = await Restaurants.find({});
  var used = await Used.find({});

  res.send({yet: rest, already: used});
});

router.get('/sort', function (req, res, next) {
  
  res.send({ yet: {}, already: {}, sorted: "" });
});

module.exports = router;
