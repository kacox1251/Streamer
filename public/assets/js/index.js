console.log("Index js here");

$(document).ready(function () {

  const popularMovies = () => {
    $.get("/index", function (data) {
      console.log("pop movie " + data);
    }).then(function (data) {

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
    });
  };

  const popularTv = () => {
    $.get("/index", function (data) {
      console.log("pop tv " + data);
    }).then(function (data) {

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
      // }).then(() => {
      //   $('.owl-carousel').owlCarousel({
      //     loop: true,
      //     margin: 10,
      //     nav: true,
      //     responsive: {
      //       0: {
      //         items: 1
      //       },
      //       600: {
      //         items: 3
      //       },
      //       1000: {
      //         items: 4
      //       }
      //     }
      //   });
    });
  };

  popularMovies();
  popularTv();

});
