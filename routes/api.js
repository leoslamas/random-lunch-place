var express = require('express');
var router = express.Router();
const { Restaurants, Used } = require('../app/models');

router.get('/restaurants', function(req, res, next) {

  res.send({yet: {}, already: {}});
});

router.get('/sort', function (req, res, next) {
  
  res.send({ yet: {}, already: {}, sorted: "" });
});

module.exports = router;
