//Code for Gasoline Gallon 
google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {

  var button = document.getElementById('change-chart');
  var chartDiv = document.getElementById('gge-charts');

  var data = google.visualization.arrayToDataTable([
    ['Fuel', 'Gasoline Gallon Equivalent', 'Energy Content'],
    ['Hydrogen',  0.45, 51585],  
    ['Gasoline', 1.00, 112114],
    ['Low Sulfur Diesel',  1.12, 128488],
    ['Biodiesel',  1.05, 119550],
    ['Propane (LPG)',  0.74, 84250],
    ['Compressed Natural Gas (CNG)',  0.18, 20160],
    ['Liquefied Natural Gas (LNG)',  0.19, 21240],
    ['Ethanol/E100',  0.67, 76330],
    ['Methanol',  0.50, 57250],
    ['Electricity',  0.03, 3414]
  ]);

  var materialOptions = {
    width: 900,
    chart: {
      title: 'Gasoline Gallon Equivalent, and Energy Content of Various Fuels',
      subtitle: 'GGE on the left, EC on the right'
    },
    series: {
      0: { axis: 'GGE' }, // Bind series 0 to an axis named 'distance'.
      1: { axis: 'EC' } // Bind series 1 to an axis named 'brightness'.
    },
    axes: {
      y: {
        distance: {label: 'GGE'}, // Left y-axis.
        brightness: {side: 'right', label: 'Btu/gal'} // Right y-axis.
      }
    }
  };

  var classicOptions = {
    width: 900,
    series: {
      0: {targetAxisIndex: 0},
      1: {targetAxisIndex: 1}
    },
    title: 'Gasoline Gallon Equivalent and Energy Content of Various Fuels',
    vAxes: {
      // Adds titles to each axis.
      0: {title: 'GGE'},
      1: {title: 'EC in Btu/gal'}
    }
  };

//   function drawMaterialChart() {
//     var materialChart = new google.charts.Bar(chartDiv);
//     materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
//     button.innerText = 'Change to Classic';
//     button.onclick = drawClassicChart;
//   }

  function drawClassicChart() {
    var classicChart = new google.visualization.ColumnChart(chartDiv);
    classicChart.draw(data, classicOptions);
    button.innerText = 'Change to Material';
    button.onclick = drawMaterialChart;
  }

  drawClassicChart();
};