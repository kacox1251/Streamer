/* eslint-disable quotes */

// FIX ALL VARS TO CONST OR LET
const isAuthenticated = require("../config/middleware/isAuthenticated")
const db = require("../models")
require("dotenv").config()
const axios = require("axios")

module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // route for login or sign up page
  // isAuthenticated
  app.get("/", function(req, res) {
    // if (req.user) {
    //   console.log("if logged in go to profile")
    //   res.render("profile")
    // }
    // console.log("if not logged in go to index")
    res.render("index")
  })





  // isAuthenticated, ADD ID HERE
  app.get("/profile/:id", isAuthenticated, function(req, res) {
    if (req.user) {
      db.Shows.findAll({
        where: {
          UserId: req.user.id
        }
      }).then(function(shows) {
        let want_to_watch= [];
        let watching = [];
        let completed = [];
        console.log("AMBER", shows)
        for (let i = 0; i < shows.length; i++) {
          const show = shows[i].dataValues;
          if (show.want_to_watch === true) {
            want_to_watch.push(show);
          } else if (show.watching === true) {
            watching.push(show);
          } else if (show.completed === true) {
            completed.push(show);
          }
        }
        res.render("profile", { want_to_watch, watching, completed });
      })
    } else {
      res.render("index");
    }
  });

  // DONT DELETE YET PLEASE//////////////////////////////
  // Selected Movie / TV Page:
  // on click for search redirects to selected with movie title
  app.get("/selected/:title", isAuthenticated, function (req, res) {
    if (req.user) {
      res.render("selected");
    } else {
      res.render("index");
    }
  });
  ////////////////////////////////////////////////////////////

  // DONT DELETE YET PLEASE//////////////////////////////
  app.get("/api/selected/", function (req, res) {
    // if (req.user) {
    res.render("selected", req.body[0]);
    // } else {
    // res.render("index");
    // }
  });
  // })
  ////////////////////////////////////////////////////////////

  // isAuthenticated,
  app.get("/signup", function(req, res) {
    // if (req.user) {
    //   res.render("profile");
    // }
    res.render("signup");
  })
  // isAuthenticated,
  app.get("/login", function(req, res) {
    // if (req.user) {
    //   res.redirect("profile")
    // }
    res.render("login")
  })

  //THIS IS THE WORKING ROUTE FOR SELECTED
  app.get("/selected/:type/:id", function(req, res) {
    const queryURL = `https://api.themoviedb.org/3/${req.params.type}/${req.params.id}?api_key=${process.env.API_KEY}&language=en-US`;
    console.log("queryURL", queryURL)
    axios
      .get(queryURL)
      .then(function (data) {
        console.log(data.data.id, "THIS IS THE DATA");
        let dataPass = {
          // selected: {
          api_id: data.data.id,
          summary: data.data.overview,
          poster: data.data.poster_path,
          title: data.data.title || data.data.name,
          rating: data.data.vote_average
          // }
        }
        console.log(dataPass);

        res.render("selected", dataPass); // then the object for handlebars
      });
  })

}
