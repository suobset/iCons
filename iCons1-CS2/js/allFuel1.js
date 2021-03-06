google.charts.load("current", {packages:["corechart"]});
          google.charts.setOnLoadCallback(drawChart);
          function drawChart() {
            var data = google.visualization.arrayToDataTable
                ([['X', '1', '2', '3', '4', '5', '6'],
                  [1, 2, 3, 4, 5, 6, 7],
                  [2, 3, 4, 5, 6, 7, 8],
                  [3, 4, 5, 6, 7, 8, 9],
                  [4, 5, 6, 7, 8, 9, 10],
                  [5, 6, 7, 8, 9, 10, 11],
                  [6, 7, 8, 9, 10, 11, 12]
            ]);
    
            var options = {
              legend: 'none',
              series: {
                0: { color: '#e2431e' },
                1: { color: '#e7711b' },
                2: { color: '#f1ca3a' },
                3: { color: '#6f9654' },
                4: { color: '#1c91c0' },
                5: { color: '#43459d' },
              }
            };
    
            var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
            chart.draw(data, options);
          }