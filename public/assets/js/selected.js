$(document).ready(function () {

  // bring in title from search
  $.get("/api/selected/:title", //(pass title from selected?),
    function (data) {
      console.log(data);
    }).then(function (data) {

      // MOVIE TITLE and ID
      let movieId = data.results.id;
      let movieTitle = data.results.original_title;
      $("#movie-title").text(movieTitle);
      $("#movie-title").data("movie") = movieId;

      // MOVIE POSTER
      let posterPath = data.results.poster_path;
      let img = $("<img>");
      let imgSrc = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + posterPath;
      img.attr("src", imgSrc);
      img.addClass("carouselImage");
      $("#movie-poster").text(img);

      // MOVIE SUMMARY
      let movieSummary = data.results.overview;
      $("#summary").text(movieSummary);

      // MOVIE RATING 
      let movieRating = data.results.vote_average;
      $("#rating").text("Popular Rating of " + movieRating + " out of 10.");

      // MOVIE TRAILER??
      // MOVIE CAST??

    });

  //how do I declare what it's grabbing
  $("#add-watchlist").click(function (event) {
    event.preventDefault();

    //define data based on what is on the page
    let dataPass = {
      api_id: $(this).attr("#data-movie"),
      title: $("#movie-title").value,
      // genre: $("#") , not sure how we're capturing/passing/displaying genre
      want_to_watch: true,
      watching: false,
      completed: false,
      // foreignKey: // req.user.id or $(this) req user id?
    }

    $.post("/api/selected/:id", // pass data
      {
        dataPass
      },
      function (data, status) {
        console.log("Data: " + data + " || Status: " + status);
        // then redirect to profile
        location.href("/profile");
      });
  });

  $("#mark-start").click(function (event) {
    event.preventDefault();
    //define data based on what is on the page
    let dataPass = {
      api_id: $(this).attr("#data-movie"),
      title: $("#movie-title").value,
      // genre: $("#") , not sure how we're capturing/passing/displaying genre
      want_to_watch: false,
      watching: true,
      completed: false,
      // foreignKey: // req.user.id or $(this) req user id?
    }

    $.post("/api/selected/:id", // pass data
      {
        dataPass
      },
      function (data, status) {
        console.log("Data: " + data + " || Status: " + status);
        // then redirect to profile
        location.href("/profile");
      });
  });

  $("#mark-complete").click(function (event) {
    event.preventDefault();
    //define data based on what is on the page
    let dataPass = {
      api_id: $(this).attr("#data-movie"),
      title: $("#movie-title").value,
      // genre: $("#") , not sure how we're capturing/passing/displaying genre
      want_to_watch: false,
      watching: false,
      completed: true,
      // foreignKey: // req.user.id or $(this) req user id?
    }

    $.post("/api/selected/:id", // pass data
      {
        dataPass
      },
      function (data, status) {
        console.log("Data: " + data + " || Status: " + status);

        // then redirect to profile
        location.href("/profile");
      });
  });

  $("#delete-watchlist").click(function (event) {
    event.preventDefault();

    // let showToDelete = $(this).whatever we decide on
    // let userId = $(this).however we figure out how to grab the current user
    // how are we passing this over? 
    $.ajax({
      method: "DELETE",
      url: "/api/selected/:id", // is this the correct route
    }).then(function (response) {
      location.href("/profile");
    });
  });

});