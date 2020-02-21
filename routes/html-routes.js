var path = require("path");

module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // route for login or sign up page
  // https://wireframe.cc/yyzyoE
  app.get("/", function(req, res) {
    if (req.user) {
      res.render("profile");
    }
    res.render("index");
  });

  // personal profile page route
  // https://wireframe.cc/REhi6u
  // Need to set up validation in order for them to view this page
  app.get("/profile", function(req, res) {
    if (req.user) {
      res.render("profile");
    }
  });

  app.get("browse-movies", function(req, res) {
    res.render("browsemovies");
  })
  
  app.get("browse-shows", function(req, res) {
    res.render("browseshows");
  })
  
  app.get("/:title", function(req, res) {
    res.render("selected");
  })
  
  app.get("/signup", function(req, res) {
    res.render("signup");
  })
  
  app.get("/login", function(req, res) {
    res.render("login");
  })

  // Browse Pages:
  // https://wireframe.cc/5hNno4

  // Selected Movie / TV Page:
  // https://wireframe.cc/04NaCb
  app.get("/selected", function (req, res) {
    res.render("selected");
  })

  // Homepage post login
  // https://wireframe.cc/i86e0M
  // Need to set up validation in order for them to view this page
  // app.get("/", function (req, res) {
  //   res.render("index");
  // });

};