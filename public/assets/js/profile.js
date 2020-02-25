
$(document).ready(function () {

  //get for carousel information
  // function getCarousel() {
  //   $.get("/api/profile/:id", function (result) {
  //     console.log(result);
  //   })
  // }

  // sort them into there "true" data ids
  // count each set to send over to the data on the chart
  // append appropriately 

  //       for (var i = 0; i < 20; i++) {

  //         var newDiv = $("<div>");
  //         newDiv.addClass("item");

  //         var bkgImg = data.results[i].poster_path;

  //         var img = $("<img>");
  //         var imgSrc = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + bkgImg;

  //         img.attr("src", imgSrc);
  //         img.addClass("carouselImage");
  //         newDiv.append(img);

  //         $("#popMovies").append(newDiv);
  //       };
  //     });
  //   };


  // }


  // this code generates a chart on the screen. we can add an additional
  // data set of some other information on to the same
  // radar later down the road if we would like to

  // var ctx = document.getElementById("activity-chart").getContext("2d");
  // var myChart = new Chart(ctx, {
  //   type: 'doughnut',
  //   data: {
  //     labels: ['Started Watching', 'Currently Watching', 'Will Watch'],
  //     datasets: [{
  //       label: 'What you are up to?',
  //       // data will eventually be dynamic and pull in from user's personal info
  //       data: [12, 19, 3],
  //       backgroundColor: [
  //         'rgba(218, 103, 74, 1)',
  //         'rgba(255,220,124,1)',
  //         'rgba(255,170,103,1)',
  //       ]
  //       // borderColor: 'rgba(218, 103, 74, 1)',
  //       // borderWidth: 1
  //     }]
  //   },
  //   responsive: true,
  //   options: {
  //     responsive: true,
  //     legend: {
  //       position: 'top',
  //     },
  //     animation: {
  //       animateScale: true,
  //       animateRotate: true
  //     }
  //   }
  // });

  // getCarousel();

});