var express = require('express');
var router = express.Router();

router.get('/restaurantes', function(req, res, next) {
  res.send('teste');
});

router.post('/restaurantes', function (req, res, next) {
  res.send('teste');
});

module.exports = router;
