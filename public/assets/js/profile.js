
$(document).ready(function () {


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

  const moveToSelected = function (type, id) {

    window.location.pathname = `/selected/${type}/${id}`;
  };


  const generateOwl = function () {
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

  const callCount = function () {
    $.get("/api/profile/:id/all", function (all) {
      // console.log(all.rows, "ALL");
      let sortMe = all.rows;
      let wantNum = 0;
      let watchNum = 0;
      let completedNum = 0;

      // loop through all.rows
      for (i = 0; i < sortMe.length; i++) {
        // if want_to_watch is true
        if (sortMe[i].want_to_watch === true) {
          // wantNum++
          wantNum++;
          // else if watching is true
        } else if (sortMe[i].watching === true) {
          // watchNum++
          watchNum++;
          // else
        } else {
          // completedNum++
          completedNum++;
        }
      }

      generateChart(wantNum, watchNum, completedNum);
    });
  };



  // $.get("/api/profile/id")


  // this code generates a chart on the screen. we can add an additional
  // data set of some other information on to the same
  // radar later down the road if we would like to

  const generateChart = (wantNum, watchNum, completedNum) => {
    console.log(wantNum, "Passing to chart?")
    var ctx = document.getElementById("activity-chart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Will Watch', 'Currently Watching', 'Finished'],
        datasets: [{
          label: 'What you are up to?',
          // data will eventually be dynamic and pull in from user's personal info
          data: [wantNum, watchNum, completedNum],
          backgroundColor: [
            'rgba(218, 103, 74, 1)',
            'rgba(255,220,124,1)',
            'rgba(255,170,103,1)',
          ]
          // borderColor: 'rgba(218, 103, 74, 1)',
          // borderWidth: 1
        }]
      },
      responsive: true,
      options: {
        responsive: true,
        legend: {
          position: 'top',
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    });

  }



  callCount();
  generateOwl();
  // // get for carousel information
  // function getCarousel() {

  //   // favorites, posterArray  
  //   // NEED TO PASS THE ID OVER
  //   $.get("/api/profile", function (result) {
  //     console.log("favorites ", result);  
  //   });
  // };

  //   console.log("favorites ", favorites);
  //   console.log("posterArray ", posterArray);
  // }).then(function(favorites, posterArray) {


  // sort them into there "true" data ids  
  // count each set to send over to the data on the chart
  // append appropriately 

  // let wantToWatch = [];
  // let watching = [];
  // let completer = [];

  // for (var i = 0; i < favorites.length; i++) {
  // push each by boolean value into each of the arrays  
  // }

  // how are we linking the arrays to eachother? 

  //     for (var i = 0; i < posterArray.length; i++) {

  //       var newDiv = $("<div>");  
  //       newDiv.addClass("item");

  //       var bkgImg = posterArray[i].poster_path;

  //       var img = $("<img>");
  //       var imgSrc = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + bkgImg;

  //       img.attr("src", imgSrc);
  //       img.addClass("carouselImage");
  //       newDiv.append(img);

  //       $("#popMovies").append(newDiv);
  //     };
  //   });
  // };


  // }

  // }).then(function(sortedData) {


  // getCarousel();

});