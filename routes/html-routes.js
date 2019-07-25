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
