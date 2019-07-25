<<<<<<< HEAD
// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the items
  app.get("/api/items", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.userId = req.query.user_id;
    }
    db.Item.findAll({
      where: query
    }).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  // Get route for retrieving a single Item
  app.get("/api/items/:id", function(req, res) {
    db.Item.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbItem) {
      console.log(dbItem);
      res.json(dbItem);
    });
  });

  // Item route for saving a new Item
  app.Item("/api/items", function(req, res) {
    db.Item.create(req.body).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  // DELETE route for deleting items
  app.delete("/api/items/:id", function(req, res) {
    db.Item.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  // PUT route for updating items
  app.put("/api/items", function(req, res) {
    db.Item.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbItem) {
      res.json(dbItem);
    });
  });
};
=======
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
>>>>>>> master
