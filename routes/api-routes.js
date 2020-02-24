/* eslint-disable quotes */
const db = require("../models")
require("dotenv").config()
const axios = require("axios")

// module.export function for exporting routes to server.js file
module.exports = function (app) {
  // THESE ROUTES AE FOR THE MOVIE/TV API///////////////////////////////////
  // app.get for bringing in most popular movies for index.html carousel
  app.get("/", function (req, res) {
    const queryURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=
    ${process.env.API_KEY}&language=en-US&page=1&region=US`
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
    }).then(function (//) {
		// using api_id call to api for poster image, create an array of links for front end to drill into
	}).then(function (result) {
		res.json(result, //posterArray)
	})
  

  // route for adding movies and shows to our database
  app.get("/api/selected/:id", function (req, res) {
    const show = {
      user_id: req.params.id,
      api_id: api_id,
      title: title,
      genre: genre,
      want_to_watch: want_to_watch,
      watching: watching,
      complete: complete
    }
    db.Show.findAll({
      where: {
        user_id: req.params.id,
        api_id: api_id
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
}

// create show function
//   function createShow (movie) {
//     app.post("/api/selected", function (req, res) {
//       db.Show.create({
//         api_id: req.body.api_id,
//         title: req.body.title,
//         genre: req.body.genre,
//         want_to_watch: true,
//         watching: false,
//         completed: false

//       }).then(function (results) {
//         res.end()
//       })
//     })
//   }
  // update show function
//   function updateShow (movie) {
//     app.put("/api/profile/watching/:id", function (req, res) {
//       db.Show.update(
//         { want_to_watch: false },
//         { watching: true },
//         { where: req.params.id }
//       ).then(function (response) {
//         res.json(response)
//       })
//     })
//   }

