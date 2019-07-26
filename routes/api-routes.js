require("../models")
module.exports = function(app, db) {
    app.post("/items/new", function(req, res) {
        console.log(req.user)
        db.Item.create({
            catagory: req.body.catagory,
            price: req.body.price,
            description: req.body.description,
            name: req.body.name,
            UserId: req.user.id
        }).then(function(data){
            res.json(data);
        })
})
}