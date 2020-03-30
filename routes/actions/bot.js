module.exports = (req, res, next) => {

    console.log("Bot Body:");
    console.log(req.body);

    if(req.body.type === "MESSAGE") {
        var temp = res.json;
        res.json = function(json) {
            json = { 
                text: `Today's lunch place: *${json.sorted}*!`
            };
            temp.apply(this,arguments);
        }
        
        next();

    } else {

        res.end();

    }
}