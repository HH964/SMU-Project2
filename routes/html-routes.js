// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads home.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/layouts/home.html"));
  });

  // items route loads items.html
  app.get("/items", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/items.html"));
  });

  // upload route loads upload.html
  app.get("/upload", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/upload.html"));
  });

  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });

};
