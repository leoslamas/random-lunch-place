module.exports = (req, res, next) => {

    if(req.body.type === "MESSAGE") {
        var temp = res.json;
        res.json = function(json) {
            json = { 
                text: `Today's lunch place: ${json.sorted}!`
            };
            temp.apply(this,arguments);
        }
        
        next();

    } else {

        res.end();

    }
}