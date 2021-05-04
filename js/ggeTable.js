google.charts.load('current', {'packages':['table']});
google.charts.setOnLoadCallback(drawTable);

function drawTable() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Fuel');
  data.addColumn('number', 'Gasoline Gallon Equivalent');
  data.addColumn('number', 'Energy Content');
  data.addColumn('number', 'Pump Octane Number')
  data.addRows([
    ['Hydrogen',  {v: 0.45, f: '0.45 GGE'}, {v: 51585, f: '51,585 Btu/gal'}, {v: 130, f: '130+'}],  
    ['Gasoline',  {v: 1.00, f: '1.00 GGE'}, {v: 112114, f: '112,114 Btu/gal'}, {v: 90, f: '90'}],
    ['Low Sulfur Diesel',  {v: 1.12, f: '1.12 GGE'}, {v: 128488, f: '128,488 Btu/gal'}, {v: 0, f: 'N/A'}],
    ['Biodiesel',  {v: 1.05, f: '1.05 GGE'}, {v: 119550, f: '119,550 Btu/gal'}, {v: 0, f: 'N/A'}],
    ['Propane (LPG)',  {v: 0.74, f: '0.74 GGE'}, {v: 84250, f: '84,250 Btu/gal'}, {v: 105, f: '105'}],
    ['Compressed Natural Gas (CNG)',  {v: 0.18, f: '0.18 GGE'}, {v: 20160, f: '20,160 Btu/gal'}, {v: 120, f: '120+'}],
    ['Liquefied Natural Gas (LNG)',  {v: 0.19, f: '0.19 GGE'}, {v: 21240, f: '21,240 Btu/gal'}, {v: 120, f: '120+'}],
    ['Ethanol/E100',  {v: 0.67, f: '0.67 GGE'}, {v: 76330, f: '76,330 Btu/gal'}, {v: 110, f: '110'}],
    ['Methanol',  {v: 0.50, f: '0.50 GGE'}, {v: 57250, f: '57,250 Btu/gal'}, {v: 112, f: '112'}],
    ['Electricity',  {v: 0.03, f: '0.03 GGE'}, {v: 3414, f: '3,414 Btu/gal'}, {v: 0, f: 'N/A'}]
  ]);

  var table = new google.visualization.Table(document.getElementById('table_div'));

  table.draw(data, {showRowNumber: true, width: '80%', height: '40%'});
}