import React, { Component } from 'react';
import ReactHReactHighMaps from 'react-highcharts/ReactHighmaps.src';
// var maps = require('./mapdata/europe');

var config = {
  chart: {
    spacingBottom: 20
  },
  title: {
    text: 'Europe time zones'
  },

  legend: {
    enabled: true
  },

  plotOptions: {
    map: {
      allAreas: false,
      joinBy: ['iso-a2', 'code'],
      dataLabels: {
        enabled: true,
        color: 'white',
        style: {
          fontWeight: 'bold'
        }
      },
      mapData: maps,
      tooltip: {
        headerFormat: '',
        pointFormat: '{point.name}: <b>{series.name}</b>'
      }

    }
  },

  series: [{
    name: 'UTC',
    data: ['IE', 'IS', 'GB', 'PT'].map(function (code) {
      return { code: code };
    })
  }, {
    name: 'UTC + 1',
    data: ['NO', 'SE', 'DK', 'DE', 'NL', 'BE', 'LU', 'ES', 'FR', 'PL', 'CZ', 'AT', 'CH', 'LI', 'SK', 'HU', 'SI', 'IT', 'SM', 'HR', 'BA', 'YF', 'ME', 'AL', 'MK'].map(function (code) {
      return { code: code };
    })
  }]
};

class Map extends Component {
    render() {
        return <ReactHReactHighMaps config={config} ref="map"/>
    }
}

export default Map;