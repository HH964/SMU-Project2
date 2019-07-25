module.exports = function (app, db) {
    app.get("/items/:category", function (req, res) {
        db.Item.findAll({
            where: {
                catagory: req.params.category
            }
        }).then(function (data) {
            res.render("catagory", { item: data });
        })
    })

    app.get("/items/:price", function (req, res) {
        db.Item.findAll({
            where: {
                price: req.params.price
            }
        }).then(function (data) {
            res.render("catagory", { item: data });
        })
    })

    app.get("/items/:description", function (req, res) {
        db.Item.findAll({
            where: {
                description: req.params.description
            }
        }).then(function (data) {
            res.render("catagory", { item: data });
        })
    })

    app.get("/upload", function (req, res) {
        res.render("upload");
    })

    app.get("/auto", function (req, res) {
        res.render("auto");
    })
    app.get("/books", function (req, res) {
        res.render("books");
    })
    app.get("/cart", function (req, res) {
        res.render("cart");
    })
    app.get("/catagory", function (req, res) {
            res.render("catagory");
    })
    app.get("/clothes", function (req, res) {
        res.render("clothes");
    })
    app.get("/electronics", function (req, res) {
        res.render("electronics");
    })
    app.get("/furniture", function (req, res) {
        res.render("furniture");
    })
    app.get("/home", function (req, res) {
        res.render("home");
    })
    app.get("/myitems", function (req, res) {
        res.render("myitems");
    })
    app.get("/profile", function (req, res) {
        res.render("profile");
    })
    
}