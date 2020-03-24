const db = require('../../models');
const {
  Restaurants,
  Useds
} = require('../../models');

module.exports = (req, res) => {
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
}