// import { response } from "express";

$(document).ready(function () {

  const generateOwl = function() {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 4
        },
      }
    });

  };

  generateOwl();

  //on click for heading over to selected page
  $(".carouselImage").on("click", function (event) {
    event.preventDefault();

    console.log("this", this)
    //   let movie = $(this).data("movie");
    //   console.log("this movie ", movie);
    //   console.log("this tv ", $(this).data("tv"));


    let id = $(this).data("id");


    let type = $(this).data("movie") === undefined ? "tv" : "movie";
    // to be injected to the api address later

    moveToSelected(type, id);
  });

  const moveToSelected = function(type, id) {

    window.location.pathname = `/selected/${type}/${id}`;
  };

  // click event for search functionality
  $(".searchform").on("submit", function(event) {
    event.preventDefault();


    var search = $("#search").val().trim();
    search = search.replace(/\s+/g, "").toLowerCase();

    if(search) {
      console.log(search);
      location.assign("/selected");
      console.log("/api/" + search);
    } else {
      var mblSearch = $("#search2").val().trim();
      mblSearch = mblSearch.replace(/\s+/g, "").toLowerCase();
      console.log(mblSearch);
      location.assign("/selected");
      console.log("/api/" + mblSearch)
    }
  });
});
