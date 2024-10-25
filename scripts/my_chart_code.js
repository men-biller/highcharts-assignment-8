Highcharts.chart('container', {
  chart: {
    type: 'bar'
  },
  title: {
    text: 'Fruit Consumption'
  },
  xAxis: {
    categories: ['Apples', 'Bananas', 'Oranges', 'Mangoes']
  },
  yAxis: {
    title: {
      text: 'Fruit that was eaten last week'
    }
  },
  series: [{
    name: 'Benjamin',
    data: [1, 0, 4, 2]
  }, {
    name: 'Mate',
    data: [5, 7, 3, 0]
  }]
});
