var path = require("path");

module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // route for login or sign up page
  // https://wireframe.cc/yyzyoE
  app.get("/", function(req, res) {
    if (req.user) {
      res.redirect("/profile");
    }
    res.sendFile(path.join(__dirname, "../public/assets/index.html"));
  });

  // personal profile page route
  // https://wireframe.cc/REhi6u
  // Need to set up validation in order for them to view this page
  app.get("/profile", function(req, res) {
    if (req.user) {
      res.redirect("/profile");
    }
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });

  app.get("browse-movies", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/browsemovies.html"));
  })
  
  app.get("browse-shows", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/browseshows.html"));
  })
  
  app.get("/:title", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/selected.html"));
  })
  
  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  })
  
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
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
  app.get("/", function (req, res) {
    res.render("index");
  });

};