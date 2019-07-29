module.exports = function(app, db) {
    app.get("/items", function(req, res) {
        db.Item.findAll({
            where: {
                UserId: req.user.id
            }
        }).then(function(data) {
            res.render("myItems", {item: data});
        })
    })
    
    app.get("/items/:catagory", function(req, res) {
        db.Item.findAll({
            where: {
                catagory: req.params.catagory
            }
        }).then(function(data) {
            res.render("catagory", {item: data});
        })
    })

    app.get("/items/:price", function(req, res) {
        db.Item.findAll({
            where: {
                price: req.params.price
            }
        }).then(function(data) {
            res.render("catagory", {item: data});
        })
    })

    app.get("/items/:description", function(req, res) {
        db.Item.findAll({
            where: {
                description: req.params.description
            }
        }).then(function(data) {
            res.render("catagory", {item: data});
        })
    })

    app.get("/upload", isLoggedIn, function(req,res){
        res.render("upload");
    })

    function isLoggedIn(req, res, next) {
		if (req.isAuthenticated()) return next();

		res.redirect("/signin");
	}
}