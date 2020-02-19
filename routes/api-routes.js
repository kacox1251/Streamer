var Show = require("../models/shows");

module.exports = function (app) {

  //app.get for bringing in most popular movies for home.html carousel

  //app.get for bringing in most popular shows for home.html carousel

  //app.get for bringing in individual user's to watch for carousel
  app.get("/profile/api", function(req, res) {
    Show.findAll({
      where: {
        want_to_watch: true
      }
    }).then(function(response) {
        res.json(response);
      });
  });
  //app.get for bringing in individual user's have watched for carousel
  app.get("/profile/api", function(req, res) {
    Show.findAll({
      where: {
        completed: true
      }
    }).then(function(response) {
        res.json(response);
      });
  });
  //app.get for bringing in individual user's watching
  app.get("/profile/api", function(req, res) {
    Show.findAll({
      where: {
        watching: true
      }
    }).then(function(response) {
        res.json(response);
      });
  });
};