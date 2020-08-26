google.charts.load('current', { packages: ['corechart', 'bar'] });
//defaults
google.charts.setOnLoadCallback(energy);
//after our work
google.charts.setOnLoadCallback(energyAll);
//fuzzy + GA

function energy() {
  var data = google.visualization.arrayToDataTable([
    ['Energy Consumption', 'DC energy', 'edge energy', 'camera energy'],
    ['config-2 cloud', 14280032.35, 1668666, 6770414.088],
    ['config-2 edge', 13356197.76, 2097670.862, 6770414.088],
    ['config-3 cloud', 15143647.08, 3337332, 13540828.18],
    ['config-3 edge', 13377240.68, 4195341.724, 13540828.18],
    ['config-4 cloud', 16045823.93, 6674664, 27081656.35],
    ['config-4 edge', 13441132.92, 8390683.448, 27081656.35],
  ]);

  var options = {
    chart: {
      title: 'original data: ifogsim defaults',
      subtitle: 'DCNS: energy consumption in  both cloud and edge',
    },
  };

  const chart = new google.charts.Bar(document.getElementById('chart3'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}

function energyAll() {
  var data = google.visualization.arrayToDataTable([
    [
      'Energy Consumption',
      'random',
      'roundrobin',
      'minmin',
      'maxmin',
      'suffrage',
      'unoptimised fuzzy',
    ],
    ['config-1', 1.51e7, 1.4e7, 1.57e7, 1.27e7, 1.57e7, 1.25e7],
    ['config-2 ', 2.56e7, 2.39e7, 2.69e7, 2.16e7, 2.69e7, 2.11e7],
    ['config-3 ', 4.53e7, 4.36e7, 4.93e7, 3.93e7, 4.93e7, 3.83e7],
    ['config-4', 8.44e7, 8.31e7, 9.41e7, 7.47e7, 9.41e7, 7.26e7],
    [
      'config-5',
      1.69e8,
      1.62e8,
      183680000,
      145450550.399999,
      183680000,
      141342074.666666,
    ],
    //['config-4 edge', 13534710.82, 8390683.448, 27081656.35],
  ]);

  var options = {
    chart: {
      title: 'energy comsumption output for 5 different hueristics',
      subtitle:
        'DCNS: energy consumption after using our heuristic plus other algoithms for comparison',
    },
  };

  const chart = new google.charts.Bar(document.getElementById('chart6'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}
