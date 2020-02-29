$(document).ready(function () {

  // let test = JSON.parse(localStorage.getItem(data));

  // console.log("selected working? print data: ", test);

  // bring in title from search
  // $.get("/api/selected/:title", //(pass title from selected?),
  //   function (data) {
  //     // console.log(data);
  //   }).then(function (data) {

  //     // MOVIE TITLE and ID
  //     let movieId = data.results.id;
  //     let movieTitle = data.results.original_title;
  //     $("#movie-title").text(movieTitle);
  //     $("#movie-title").data("movie") = movieId;

  //     // MOVIE POSTER
  //     let posterPath = data.results.poster_path;
  //     let img = $("<img>");
  //     let imgSrc = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + posterPath;
  //     img.attr("src", imgSrc);
  //     img.addClass("carouselImage");
  //     $("#movie-poster").text(img);

  //     // MOVIE SUMMARY
  //     let movieSummary = data.results.overview;
  //     $("#summary").text(movieSummary);

  //     // MOVIE RATING 
  //     let movieRating = data.results.vote_average;
  //     $("#rating").text("Popular Rating of " + movieRating + " out of 10.");

  //   });

  // how do I declare what it's grabbing
  // $("#add-watchlist").click(function (event) {
  //   event.preventDefault();

  //   //define data based on what is on the page
  //   let dataPass = {
  //     api_id: $(this).attr("#data-movie"),
  //     title: $(this).value("#movie-title"),
  //     want_to_watch: true,
  //     watching: false,
  //     completed: false
  //     // foreignKey: // req.user.id or $(this) req user id?
  //   };
  //   // console.log("add " + dataPass)

  //   $.post("/api/selected/:id", // pass data
  //     {
  //       dataPass
  //     },
  //     function (data, status) {
  //       // console.log("Data: " + data + " || Status: " + status);
  //       // then redirect to profile
  //       location.href("/profile");
  //     });
  // });
  $(".add-watchlist").click(function (event) {
    event.preventDefault();
    console.log("something happened")
    ///define data based on what is on the page
    let dataPass = {
      api_id: $(".posterImage").attr("data-id"),
      title: $(".title").text().trim(),
      media_type: $(".posterImage").attr("data-media"),
      poster_path: $(".posterImage").attr("data-poster"),
      UserId: localStorage.getItem("user-id")
    };
    console.log("add " + JSON.stringify(dataPass))
    $.post("/api/watchlist", {
      api_id: dataPass.api_id,
      title: dataPass.title,
      media_type: dataPass.media_type,
      poster_path: dataPass.poster_path,
      want_to_watch: true,
      watching: false,
      completed: false,
      UserId: dataPass.UserId
    }).then(function(data) {
      console.log("is this thing on?");
      if(data.message === "success") {
        alert("Added to your watchlist!");
      }
    }).catch(function(e) {
      console.log(e);
    })
     
  });

  $(".mark-start").click(function (event) {
    event.preventDefault();
    console.log("something happened")
    ///define data based on what is on the page
    let dataPass = {
      api_id: $(".posterImage").attr("data-id"),
      title: $(".title").text().trim(),
      media_type: $(".posterImage").attr("data-media"),
      poster_path: $(".posterImage").attr("data-poster"),
      UserId: localStorage.getItem("user-id")
    };
    console.log("add " + JSON.stringify(dataPass))
    $.post("/api/watchlist", {
      api_id: dataPass.api_id,
      title: dataPass.title,
      media_type: dataPass.media_type,
      poster_path: dataPass.poster_path,
      want_to_watch: false,
      watching: true,
      completed: false,
      UserId: dataPass.UserId
    }).then(function(data) {
      console.log("is this thing on?");
      if(data.message === "success") {
        alert("This title is now on your watching list");
      }
    }).catch(function(e) {
      console.log(e);
    })
     
  });

  $(".mark-complete").click(function (event) {
    event.preventDefault();
    console.log("something happened")
    ///define data based on what is on the page
    let dataPass = {
      api_id: $(".posterImage").attr("data-id"),
      title: $(".title").text().trim(),
      media_type: $(".posterImage").attr("data-media"),
      poster_path: $(".posterImage").attr("data-poster"),
      UserId: localStorage.getItem("user-id")
    };
    console.log("add " + JSON.stringify(dataPass))
    $.post("/api/watchlist", {
      api_id: dataPass.api_id,
      title: dataPass.title,
      media_type: dataPass.media_type,
      poster_path: dataPass.poster_path,
      want_to_watch: false,
      watching: false,
      completed: true,
      UserId: dataPass.UserId
    }).then(function(data) {
      console.log("is this thing on?");
      if(data.message === "success") {
        alert("This title has been completed!");
      }
    }).catch(function(e) {
      console.log(e);
    })
     
  });


});