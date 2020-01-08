var express = require('express');
var router = express.Router();
var db = require('../models');

const {
  Restaurants,
  Useds
} = require('../models');

//restaurants
router.get('/restaurants', (req, res, next) => {
  var restProm = Restaurants.findAll();
  var usedsProm = Useds.findAll();

  Promise.all([restProm, usedsProm])
    .then(values => {
      res.json({ yet: values[0], already: values[1] });
    });
});

//sort
router.get('/sort', (req, res, next) => {
  var restProm = Restaurants.findAll();
  var usedsProm = Useds.findAll();

  Promise.all([restProm, usedsProm])
    .then(values => {
      var today = new Date();
      var rests = values[0];
      var useds = values[1];

      if (useds.length > 0) var lastUsed = useds[useds.length-1];
      
      var nextRest = rests[Math.floor(Math.random() * rests.length)];

      if (lastUsed == undefined || (today.getDate() !== lastUsed.date.getDate() && today.getMonth() !== lastUsed.date.getMonth())) {
        
        db.sequelize.transaction(t => {

          return Promise.all([
            Useds.create({ name: nextRest.name, date: new Date() }),
            Restaurants.destroy({ where: { name: nextRest.name } })
          ])

        }).then(result => {
          var used = result[0];

          useds.push(used);
          rests = rests.filter(item => item.id !== nextRest.id);

          res.json({ yet: rests, already: useds, sorted: nextRest.name });

        });

      } else {

        res.json({ yet: rests, already: useds, sorted: lastUsed.name });
        
      }
    });
});

//remove
router.delete('/remove/:id', (req, res) => {
  if (isNaN(req.params.id)) {
    res.json({}); 
    return;
  }
  
  Promise.all([
    Restaurants.findAll(),
    Useds.findAll()
  ]).then(result => {
    var rests = result[0];
    var useds = result[1];

    var removed = useds.find(item => item.id == req.params.id) || rests.find(item => item.id == req.params.id);

    db.sequelize.transaction(t => {

      return Promise.all([
        Useds.destroy({ where: { id: removed.id } }),
        Restaurants.create({ name: removed.name })
      ])

    }).then(result => {
    
      useds = useds.filter(item => item.name != removed.name);
      rests.push({ name: removed.name })

      res.json({ yet: rests, already: useds, sorted: "" });

    }).catch(e1 => {
      console.error(e1);
      res.json({ yet: rests, already: useds, sorted: "" });
    });

  }).catch(e2 => {
    console.error(e2);
  });
});

module.exports = router;