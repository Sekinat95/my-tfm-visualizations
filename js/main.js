google.charts.load('current', {packages: ['corechart', 'bar']});
//defaults
google.charts.setOnLoadCallback(network);
google.charts.setOnLoadCallback(delays);
google.charts.setOnLoadCallback(energy);
//min-max
google.charts.setOnLoadCallback(networkMinMax);
//fuzzy + GA

function network(){
  var data = google.visualization.arrayToDataTable([
    ['network usage', 'cloud', 'edge'],
    ['config 1', 166344, 11631],
    ['config 2', 332589, 22263],
    ['config 3', 498834, 34262],
    ['config 4', 664999, 45444],
    ['config 5', 831164, 56077]
  ]);

  var options = {
    chart: {
      title: 'Network usage',
      subtitle: 'DCNS: network usage in both cloud and edge',
    }
  };

  
  const chart = new google.charts.Bar(document.getElementById('chart_div'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}

function delays(){
  var data = google.visualization.arrayToDataTable([
    ['delays', 'cloud', 'edge'],
    ['config 1', 210.3834831, 8.467142857],
    ['config 2', 210.7761963, 8.467142857],
    ['config 3', 211.5724779, 8.467142857],
    ['config 4', 1293.882291, 8.467142857],
    ['config 5', 3224.914503, 8.467142857]
  ]);

  var options = {
    chart: {
      title: 'delays',
      subtitle: 'DCNS: delays in both cloud and edge',
    }
  };

  
  const chart = new google.charts.Bar(document.getElementById('chart2'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}

function energy(){
  var data = google.visualization.arrayToDataTable([
    ['Energy Consumption', 'DC energy', 'edge energy', 'camera energy'],
    ['config-2 cloud', 14280032.35, 1668666, 6770414.088],
    ['config-2 edge', 13356197.76, 2097670.862, 6770414.088],
    ['config-3 cloud', 15143647.08, 3337332, 13540828.18],
    ['config-3 edge', 13377240.68, 4195341.724, 13540828.18],
    ['config-4 cloud', 16045823.93, 6674664, 27081656.35],
    ['config-4 edge', 13441132.92, 8390683.448, 27081656.35]
  ]);

  var options = {
    chart: {
      title: 'delays',
      subtitle: 'DCNS: energy consumption in  both cloud and edge',
    }
  };

  
  const chart = new google.charts.Bar(document.getElementById('chart3'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}

function networkMinMax(){
  var data = google.visualization.arrayToDataTable([
    ['cnetwork usage', 'cloud', 'edge'],
    ['config 1', 166344, 12182.32],
    ['config 2', 332589, 22814.64],
    ['config 3', 664999, 45649.68],
    ['config 4', 1050079, 91073.76],
    ['config 5', 1101319, 181820.32]
  ]);

  var options = {
    chart: {
      title: 'Network usage',
      subtitle: 'DCNS: network usage in both cloud and edge',
    }
  };

  
  const chart = new google.charts.Bar(document.getElementById('chart4'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}
