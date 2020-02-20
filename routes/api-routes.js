var Show = require("../models/shows");

module.exports = function (app) {

  //app.get for bringing in most popular movies for home.html carousel

  //app.get for bringing in most popular shows for home.html carousel

  //app.get for bringing in individual user's to watch for carousel
  app.get("/profile/api", function (req, res) {
    Show.findAll({
      where: {
        want_to_watch: true
      }
    }).then(function (response) {
      res.json(response);
    });
  });
  //app.get for bringing in individual user's have watched for carousel
  app.get("/profile/api", function (req, res) {
    Show.findAll({
      where: {
        completed: true
      }
    }).then(function (response) {
      res.json(response);
    });
  });
  //app.get for bringing in individual user's watching
  app.get("/profile/api", function (req, res) {
    Show.findAll({
      where: {
        watching: true
      }
    }).then(function (response) {
      res.json(response);
    });
  });
  //app.get for bringing in individual user's watchlist for carousel
  app.get("/api/users/:id", function (req, res) {
    db.User.findOne({
      // where: {
      //   id: //how are we grabbing this from the currently logged in data?
      // },
      include: [db.Show]
    }).then((data) => {
      //am I understanding correctly that this would be the information pulled
      // from the database and allow me to pull their movie titles etc?
      res.json(data);
    });
  });

  //app.get for bringing in individual user's have watched for carousel

  //app.get for bringing in individual user's want to watch for carousel

  //app.post for adding new movie or tv show

};