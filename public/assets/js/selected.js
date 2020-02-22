$(document).ready(function () {

  $("#add-watchlist").click(function () {
    console.log("user Id" + window.user.id);
  });

  // // bring in title from search
  // $.post("/api/...", { // what does this need to go to
  //   // title: title from search
  // }).then(function (data) {

  //   // MOVIE TITLE
  //   let movieTitle = data.results.original_title;
  //   $("#movie-title").text(movieTitle);

  //   // MOVIE POSTER
  //   let posterPath = data.results.poster_path;
  //   let img = $("<img>");
  //   let imgSrc = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + posterPath;
  //   img.attr("src", imgSrc);
  //   img.addClass("carouselImage");
  //   $("#movie-poster").text(img);

  //   // MOVIE SUMMARY
  //   let movieSummary = data.results.overview;
  //   $("#summary").text(movieSummary);

  //   // MOVIE RATING 
  //   let movieRating = data.results.vote_average;
  //   $("#rating").text("Popular Rating of " + movieRating + " out of 10.");

  //   // MOVIE TRAILER??
  //   // MOVIE CAST??

  // });

  // //how do I declare what it's grabbing
  // $("#add-watchlist").click(function (event) {
  //   event.preventDefault();

  //   $.post("/api/user/:id", // is this the correct route
  //     {
  //       // api_id: ,
  //       // title:  ,
  //       // genre:  ,
  //       // want_to_watch: true, 
  //       // watching: false,
  //       // completed: false,
  //       // foreignKey: req.user.id?
  //     },
  //     function (data, status) {
  //       console.log("Data: " + data + " || Status: " + status);
  //       // then redirect to profile
  //       location.href("/profile");
  //     });
  // });

  // $("#mark-start").click(function (event) {
  //   event.preventDefault();

  //   $.post("/api/user/:id", // is this the correct route
  //     {
  //       // api_id: ,
  //       // title:  ,
  //       // genre:  ,
  //       // want_to_watch: false, 
  //       // watching: true,
  //       // completed: false,
  //       // foreignKey: user id however it needs to be passed over
  //     },
  //     function (data, status) {
  //       console.log("Data: " + data + " || Status: " + status);
  //       // then redirect to profile
  //       location.href("/profile");
  //     });
  // });

  // $("#mark-complete").click(function (event) {
  //   event.preventDefault();
  //   $.post("/api/user/:id", // is this the correct route
  //     {
  //       // api_id: ,
  //       // title:  ,
  //       // genre:  ,
  //       // want_to_watch: false, 
  //       // watching: false,
  //       // completed: true,
  //       // foreignKey: user id however it needs to be passed over
  //     },
  //     function (data, status) {
  //       console.log("Data: " + data + " || Status: " + status);

  //       // then redirect to profile
  //       location.href("/profile");
  //     });
  // });

  // $("#delete-watchlist").click(function (event) {
  //   event.preventDefault();

  //   // let showToDelete = $(this).whatever we decide on
  //   // let userId = $(this).however we figure out how to grab the current user

  //   $.ajax({
  //     method: "DELETE",
  //     url: `/api/user/${showToDelete}`, // is this the correct route
  //   }).then(function (response) {
  //     location.href("/profile");
  //   });
  // });

});