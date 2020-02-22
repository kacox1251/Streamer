var isAuthenticated = require("../config/middleware/isAuthenticated");


module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // route for login or sign up page
  // https://wireframe.cc/yyzyoE
<<<<<<< HEAD
  app.get("/", function (req, res) {
    if (req.user) {
      res.render("profile");
    }
=======
  app.get("/", function(req, res) {
>>>>>>> 1ad30c9c456f826424dfb054b25c7ba42194cf93
    res.render("index");
  });

  // personal profile page route
  // https://wireframe.cc/REhi6u
  // Need to set up validation in order for them to view this page
<<<<<<< HEAD
  app.get("/profile", function (req, res) {
=======
  app.get("/profile", isAuthenticated, function(req, res) {
>>>>>>> 1ad30c9c456f826424dfb054b25c7ba42194cf93
    if (req.user) {
      res.render("profile");
    }
    res.render("index");
  });

<<<<<<< HEAD
  app.get("browse-movies", function (req, res) {
    res.render("browsemovies");
  })

  app.get("browse-shows", function (req, res) {
=======
  app.get("/browse-movies", function(req, res) {
    res.render("browsemovies");
  })
  
  app.get("/browse-shows", function(req, res) {
>>>>>>> 1ad30c9c456f826424dfb054b25c7ba42194cf93
    res.render("browseshows");
  })

  app.get("/search/:title", function (req, res) {
    res.render("selected");
  })

  app.get("/signup", function (req, res) {
    res.render("signup");
  })
<<<<<<< HEAD

  app.get("/login", function (req, res) {
=======
  
  app.get("/login", function(req, res) {
    if (req.user) {
      res.redirect("profile");
    }
>>>>>>> 1ad30c9c456f826424dfb054b25c7ba42194cf93
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