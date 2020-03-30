module.exports = (req, res, next) => {

    console.log("Bot Body:");
    console.log(req.body);

    if (req.body.type === "MESSAGE") {
        var temp = res.json;
        res.json = function (json) {
            json = {
                "cards": [{
                    "sections": [{
                        "widgets": [{
                            "textParagraph": {
                                "text": `<center>Today's lunch place: <b>${json.sorted}</b>!</center>`
                            }
                        }]
                    }]
                }]
            };

            temp.apply(this, arguments);
        }

        next();

    } else {

        res.end();

    }
}