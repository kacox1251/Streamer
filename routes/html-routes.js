/* eslint-disable quotes */
var isAuthenticated = require("../config/middleware/isAuthenticated")
const db = require("../models")



module.exports = function (app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // route for login or sign up page
  // isAuthenticated
  app.get("/", function (req, res) {
    // if (req.user) {
    //   console.log("if logged in go to profile")
    //   res.render("profile")
    // }
    // console.log("if not logged in go to index")
    res.render("index")
  })


  // isAuthenticated, ADD ID HERE
  app.get("/profile/:id", isAuthenticated, function (req, res) {
    if (req.user) {
      // console.log("res.id", res.id);
      res.render("profile");
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
  // isAuthenticated,
  app.get("/signup", function (req, res) {
    // if (req.user) {
    //   res.render("profile");
    // }
    res.render("signup");
  })
  // isAuthenticated,
  app.get("/login", function (req, res) {
    // if (req.user) {
    //   res.redirect("profile")
    // }
    res.render("login")
  })

  // Selected Movie / TV Page:

  app.get("/selected", function (req, res) {
    res.render("selected")
  })
}
