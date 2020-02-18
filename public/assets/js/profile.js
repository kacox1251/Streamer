
$(document).ready(function () {

  // this code generates a chart on the screen. we can add an additional
  // data set of some other information on to the same
  // radar later down the road if we would like to
  var ctx = document.getElementById("activity-chart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Started Watching', 'Currently Watching', 'Will Watch'],
      datasets: [{
        label: 'What you are up to?',
        // data will eventually be dynamic and pull in from user's personal info
        data: [12, 19, 3],
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


  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });

});