var express = require('express');
var router = express.Router();
const actions = require('./actions')

//restaurants
router.get('/restaurants', actions.restaurants);

//sort
router.get('/sort', actions.sort);

//remove
router.delete('/remove/:id', actions.remove);

module.exports = router;