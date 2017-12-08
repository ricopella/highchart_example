import React, { Component } from 'react';
import ReactHighCharts from 'react-highcharts';

const config = {
  xAxis: {
    categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  },
  series: [{
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
  }]
};

class Chart extends Component {
    componentDidMount() {
      let chart = this.refs.chart.getChart();
      chart.series[0].addPoint({x: 10, y: 12});
    }
  
    render() {
      return <ReactHighCharts config={config} ref="chart" />;
    }
}

export default Chart;
