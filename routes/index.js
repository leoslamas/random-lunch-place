var express = require('express');
var router = express.Router();
var client = require('../models/db')

var teste = [];

client.query('SELECT * FROM almoco_random;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    teste.push(row);
  }
  client.end();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
    { 
      title: 'Almoço Random',
      rows: teste
    }
  );
});

module.exports = router;
