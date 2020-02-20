
$(document).ready(function () {

  const popularMovies = () => {

    let APIkey = "082730b7d0515dfc1a479393d7e20920";

    let popularMoviesSearch = "https://api.themoviedb.org/3/movie/top_rated?api_key=" + APIkey + "&language=en-US&page=1&region=US";

    $.ajax({
      url: popularMoviesSearch,
      method: "GET",
      success: function (data) {
        console.log(data);

        for (var i = 0; i < 20; i++) {

          var newDiv = $("<div>");
          newDiv.addClass("item");

          var bkgImg = data.results[i].poster_path;


          var img = $("<img>");
          var imgSrc = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + bkgImg;


          img.attr("src", imgSrc);
          img.addClass("carouselImage");
          newDiv.append(img);

          $("#popMovies").append(newDiv);

        };
      }
    });
  };

  const popularTv = () => {

    let APIkey = "082730b7d0515dfc1a479393d7e20920";

    let popularTvSearch = "https://api.themoviedb.org/3/tv/on_the_air?api_key=" + APIkey + "&language=en-US&page=1";

    $.ajax({
      url: popularTvSearch,
      method: "GET",
      success: function (data) {
        console.log(data);

        //div with class, image with info, append image to div, append div to parent
        for (var i = 0; i < 20; i++) {

          var newDiv = $("<div>");
          newDiv.addClass("item");

          var bkgImg = data.results[i].poster_path;


          var img = $("<img>");
          var imgSrc = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + bkgImg;


          img.attr("src", imgSrc);
          img.addClass("carouselImage");
          newDiv.append(img);

          $(newDiv).appendTo($("#popTv"));

        };
      }
    }).then(() => {
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
          }
        }
      });
    });

  };

  popularMovies();
  popularTv();

});