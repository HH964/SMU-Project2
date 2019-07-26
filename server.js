var express = require("express");
var passport = require("passport");
var session = require("express-session");
var exphbs = require("express-handlebars");

<<<<<<< HEAD
var db = require("./app/models");
=======
var db = require("./models");
>>>>>>> master

var app = express();
var PORT = process.env.PORT || 5000;

<<<<<<< HEAD
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
=======
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"))
>>>>>>> master

//for passport
app.use(
	session({
		secret: "anything you want",
		resave: true,
		saveUninitialized: true
	})
); //session secret
app.use(passport.initialize());
app.use(passport.session()); //allows persistent login sessions

//set up handlebars
<<<<<<< HEAD
app.set("views", "./app/views");
app.engine("hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");

app.get("/", function(req, res) {
	res.send("Welcome to Passport with Sequlize");
});

//routes
require("./app/routes/auth.js")(app, passport);

//passport init
require("./app/config/passport/passport.js")(passport, db.User);

db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
		console.log("App listening on http://localhost:" + PORT);
	});
});
=======
app.set("views", "./views");
app.engine("hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");

// app.get("/", function(req, res) {
// 	res.redirect("/signin");
// });

//routes
require("./routes/auth.js")(app, passport);

require("./routes/html-routes")(app, db);
require("./routes/api-routes")(app, db);

//passport init
require("./config/passport/passport.js")(passport, db.User);
app.listen(PORT, function() {
	console.log("App listening on http://localhost:" + PORT);
});


// db.sequelize.sync().then(function() {
	
// });


// db.Item.create({
// 	catagory: "books",
// 	price: 10.00,
// 	description: "a small man must destroy a ring",
// 	name: "Harry Potter",
// 	UserId: 1
// })
>>>>>>> master
