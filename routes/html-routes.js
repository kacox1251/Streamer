/* eslint-disable quotes */
var isAuthenticated = require("../config/middleware/isAuthenticated")

module.exports = function (app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // route for login or sign up page
 
  app.get("/", isAuthenticated, function (req, res) {
    if (req.user) {
      res.render("profile")
    }
    res.render("index")
  })

  // personal profile page route

  app.get("/profile", isAuthenticated, function (req, res) {
    if (req.user) {
      res.render("profile")
    }
    res.render("index")
  })

  app.get("/browse-movies", function (req, res) {
    res.render("browsemovies")
  })

  app.get("/browse-shows", function (req, res) {
    res.render("browseshows")
  })

  app.get("/search/:title", function (req, res) {
    res.render("selected")
  })

  app.get("/signup", isAuthenticated, function (req, res) {
    if (req.user) {
      res.render("profile");
    }
    res.render("signup");
  })
  
  app.get("/login", isAuthenticated, function(req, res) {
    if (req.user) {
      res.redirect("profile")
    }
    res.render("login")
  })

  // Selected Movie / TV Page:

  app.get("/selected", function (req, res) {
    res.render("selected")
  })
}
