
module.exports = function(app) {
	app.get("/", function(req, res){
        res.render('index')
    });

    app.get("/autos", function(req, res){
        res.render('auto')
    });

    app.get("/books", function(req, res){
        res.render('books')
    });

    app.get("/clothes", function(req, res){
        res.render('clothes')
    });

    app.get("/electircs", function(req, res){
        res.render('electrics')
    });

    app.get("/furniture", function(req, res){
        res.render('furniture')
    });

    app.get("/profile", function(req, res){
        res.render('profile')
    });

    app.get("/cart", function(req, res){
        res.render('cart')
    });

    app.get("/myitme", function(req, res){
        res.render('myitems')
    });

    app.get("/sell", function(req, res){
        res.render('sell')
    });


};

module.exports = function(app, db) {
    app.get("/items", function(req, res) {
        db.Item.findAll({}).then(function(data) {
            res.render("catagory", {item: data});
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

}


