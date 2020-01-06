var express = require('express');
var router = express.Router();
const { Restaurants } = require('../app/models');

/* GET home page. */
router.get('/', function(req, res, next) {
  Restaurants.create({ name: 'Podrao'});
  
  res.render('index', 
    { 
      title: 'Almoço Random'
    }
  );
});

module.exports = router;
