google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Storage Method', 'Amount of Energy (MW)'],
        ['Pumped Hydrogen',     27091],
        ['Thermal',      674],
        ['Electro-Mechanical',  791],
        ['Electro-Chemical', 874]
    ]);

    var options = {
        title: 'U.S. Energy Storage Projects By Technology Type in 2021'
    };

    var chart = new google.visualization.PieChart(document.getElementById('energy-pie'));

    chart.draw(data, options);
}
