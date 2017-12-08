import React, { Component } from 'react';
import ReactHighCharts from 'react-highcharts';

const config = {
  title: {
    text: 'FanAI Test Chart'
  },
  credits: {
    enabled: false
},
  xAxis: {
    categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  },
  series: [
    {
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4],
    color: '#FF0000'
  },
  {
    data: [69.9, 31.5, 6.4, 120.2, 244.0, 32.9, 15.6, 248.5, 16.4, 294.1, 95.6, 454.4],
    color: '#1F1F1F'
  }
]
};

class Chart extends Component {
  
    render() {
      return <ReactHighCharts config={config} ref="chart" />;
    }
}

export default Chart;
