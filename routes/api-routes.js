
const db = require("../models")
require("dotenv").config()
const axios = require("axios")

// module.export function for exporting routes to server.js file
module.exports = function (app) {

  // DON"T DELETE YET PLEASE//////////////////////////////
  // app.get info from movie db for specific title info
  // app.post("/api/selected", function (req, res) {
  //   console.log("did we get to the backend selected?");
  //   // console.log(req.body.title);

  //   const queryURL = `https://api.themoviedb.org/3/${req.body.type}/${req.body.id}?api_key=${process.env.API_KEY}&language=en-US`;
  //   console.log("queryURL", queryURL)
  //   axios
  //     .get(queryURL)
  //     .then(function (data) {
  //       console.log(data.data.id, "THIS IS THE DATA");
  //       let dataPass = [{
  //         // selected: {
  //         api_id: data.data.id,
  //         summary: data.data.overview,
  //         poster: data.data.poster_path,
  //         title: data.data.title || data.data.name,
  //         rating: data.data.vote_average
  //         // }
  //       }]

  //       res.json(dataPass); // then the object for handlebars
  //     })
  //     .catch(function (e) {
  //       res.json(e)
  //     })
  // })
  ////////////////////////////////////////////////////////////

  // When coming from search we will need a req.body.title... but
  // will it be connected to search or to selected? 
  // I believe we'll pass this info from the front end rather than
  // grabbing it in back end

  // route for search functionality
  app.get("/api/:title", function(req, res) {
    const title = req.params.title
    const queryURL = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY}&language=en-US&query=${title}&page=1&include_adult=false`
    axios
      .get(queryURL)
      .then(function(data) {
        res.json(data.data.results)
      })
      .catch(function(err) {
        console.log("Error", err.message)
        res.json(err)
      })
  })

  //   //////////////////////////////////////////////////////////////////////////////////////////////

  // app.get for getting all movie information related to a user
  app.get("/api/profile/:id", function(req, res) {
    db.Shows.findAll({
      where: {
        UserId: req.params.id
      },
      include: [db.User]
    }).then(function(result) {
      // console.log(result);
      res.json(result);
    });
  });
  // }).then(function (//) {
  // for each in res do a call using api_id for poster image
  // create an array of links for front end to drill into
  // }).then(function (favorites) {

  // loop through favorites and grab movie api_id
  // axios call to grab the poster_path
  // put all poster_paths into an array named posterArray
  // }).then(function (favorites, posterArray) {

  // res.json(favorites, posterArray)
  // });

  // DONT DELETE YET PLEASE //////////////////////////////
  // route for adding movies and shows to our database
  //     app.post("/api/selected/:id", function (req, res) {
  //       let show = {
  //         user_id: req.body.id,
  //         api_id: dataPass.api_id,
  //         title: dataPass.title,
  //         // genre: dataPass.genre,
  //         want_to_watch: dataPass.want_to_watch,
  //         watching: dataPass.watching,
  //         complete: dataPass.complete
  //       }

  //       db.Shows.findAll({
  //         where: {
  //           user_id: req.body.id,
  //           api_id: show.api_id
  //         }
  //       }).then(function (data) {
  //         console.log(data)
  //         if (!data) {
  //           db.Shows.create(show)
  //         } else {
  //           db.Shows.update(show)
  //         }
  //       }).then(function () {
  //         res.redirect("/profile")
  //       })
  //     })
  //   })
  ////////////////////////////////////////////////////////////

  // route for adding movies and shows to our database
  app.post("/api/selected/:id", function(req, res) {
    let show = {
      user_id: req.params.id, //is this the correct way to grab
      api_id: api_id,
      title: title,
      poster_path: poster_path,
      want_to_watch: want_to_watch,
      watching: watching,
      complete: complete
    }

    db.Shows.findAll({
      where: {
        user_id: req.params.id,
        api_id: show.api_id
      }
    }).then(function(data) {
      console.log(data)
      if (!data) {
        db.Shows.create(show)
      } else {
        db.Shows.update(show)
      }
    }).then(function() {
      res.redirect("/profile")
    })
  })
};