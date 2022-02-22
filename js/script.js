var xValues = ["ICBC", "WorkBC", "Private"];
var yValues = [30, 30, 40];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797"
];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: false,
      text: "Last 6 Months Business"
    }
  }
});


var xValues = ["Sep-21", "Oct-21", "Nov-21", "Dec-21","Jan-22", "Feb-22"];
var yValues = [12, 10, 8, 6, 4, 1, 0];
//var barColors = ["red", "green","blue","orange","yellow","black","white"];
var barColors = ["#b91d47", "#00aba9","#2b5797","#b91d47","#00aba9","#2b5797","#b91d47"];

new Chart("myChart2", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: false,
      text: ""
    }
  }
});