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

  // index route for login or sign up page
  // https://wireframe.cc/yyzyoE
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // personal profile page route
  // https://wireframe.cc/REhi6u
  // Need to set up validation in order for them to view this page
  app.get("/profile", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });

  // Browse Pages:
  // https://wireframe.cc/5hNno4

  // Selected Movie / TV Page:
  // https://wireframe.cc/04NaCb

  // Homepage post login
  // https://wireframe.cc/i86e0M
  // Need to set up validation in order for them to view this page
  app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

};