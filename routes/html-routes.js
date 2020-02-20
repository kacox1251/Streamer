// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // route for login or sign up page
  // https://wireframe.cc/yyzyoE


  // personal profile page route
  // https://wireframe.cc/REhi6u
  // Need to set up validation in order for them to view this page
  app.get("/profile", function (req, res) {
    res.render("profile");
  });

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