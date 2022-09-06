
var barChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novermber", "December"],
  datasets: [{
    label: "Sales",
    backgroundColor: 'rgba(43, 213, 251, 0.5)',
    borderColor: 'rgba(23, 158, 251, 1)',
    borderWidth: 1,
    data: [5500, 6000, 7000, 6500, 4500, 9000, 9500, 10000, 8000, 7500, 8500, 30000]
  }]
};

var ctx = document.getElementById('bargraph').getContext('2d');
window.myBar = new Chart(ctx, {
  type: 'bar',
  data: barChartData,
  options: {
    responsive: true,
    legend: {
      display: false,
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Bar Chart
  var barChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novermber", "December"],
    datasets: [{
      label: "Sales",
      backgroundColor: 'rgba(43, 213, 251, 0.5)',
      borderColor: 'rgba(23, 158, 251, 1)',
      borderWidth: 1,
      data: [5500, 6000, 7000, 6500, 4500, 9000, 9500, 10000, 8000, 7500, 8500, 30000]
    }]
  };

  var ctx = document.getElementById('bargraph').getContext('2d');
  window.myBar = new Chart(ctx, {
    type: 'bar',
    data: barChartData,
    options: {
      responsive: true,
      legend: {
        display: false,
      }
    }
  });

});
