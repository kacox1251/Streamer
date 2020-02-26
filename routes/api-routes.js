
const db = require("../models")
require("dotenv").config()
const axios = require("axios")

// module.export function for exporting routes to server.js file
module.exports = function (app) {
  // THESE ROUTES AE FOR THE MOVIE/TV API///////////////////////////////////
  // app.get for bringing in most popular movies for index.html carousel
  app.get("/", function (req, res) {
    const queryURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1&region=US`
    axios
      .get(queryURL)
      .then(function (data) {
        res.json(data)
      })
      .catch(function (e) {
        res.json(e)
      })
  })

  // app.get for bringing in most popular shows for index.html carousel
  app.get("/", function (req, res) {
    const queryURL = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.API_KEY}&language=en-US&page=1`
    axios
      .get(queryURL)
      .then(function (data) {
        res.json(data)
      })
      .catch(function (e) {
        res.json(e)
      })
  })
  // app.get info from movie db for specific title info
  app.get("/api/search/:title", function (req, res) {
    const title = req.body.title
    const queryURL = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY}&language=en-US&query=${title}&page=1&include_adult=false`
    axios
      .get(queryURL)
      .then(function (data) {
        res.json(data)
      })
      .catch(function (e) {
        res.json(e)
      })
  })

  // app.post for search
  app.post("/api/search", function (req, res) {
    const title = req.body.title
    const queryURL = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY}&language=en-US&query=${title}&page=1&include_adult=false`
    axios
      .get(queryURL)
      .then(function (data) {
        res.json(data)
        // res.redirect("/selected", data)
      })
      .catch(function (e) {
        res.json(e)
      })
  })
  //   //////////////////////////////////////////////////////////////////////////////////////////////

  // app.get for getting all movie information related to a user
  app.get("/api/profile/:id", function (req, res) {
    db.Show.findAll({
      where: {
        user_id: req.params.id
      }
      // }).then(function (//) {
      // for each in res do a call using api_id for poster image
      // create an array of links for front end to drill into
    }).then(function (favorites) {

      // loop through favorites and grab movie api_id
      // axios call to grab the poster_path
      // put all poster_paths into an array named posterArray
    }).then(function (favorites, posterArray) {

      // res.json(favorites, posterArray)
    });


    // route for adding movies and shows to our database
    app.post("/api/selected/:id", function (req, res) {
      let show = {
        user_id: req.params.id, //is this the correct way to grab
        api_id: api_id,
        title: title,
        // genre: genre,
        want_to_watch: want_to_watch,
        watching: watching,
        complete: complete
      }

      db.Show.findAll({
        where: {
          user_id: req.params.id,
          api_id: show.api_id
        }
      }).then(function (data) {
        console.log(data)
        if (!data) {
          db.Show.create(show)
        } else {
          db.Show.update(show)
        }
      }).then(function () {
        res.redirect("/profile")
      })
    })
  })
}