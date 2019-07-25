require("../models")
module.exports = function(app, db) {
    app.post("/items/new", function(req, res) {
        db.Item.create({
            catagory: req.body.catagory,


            userId: req.user.id
        }).then(function(data){
            res.json(data);
        })
})
}