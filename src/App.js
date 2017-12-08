import React, { Component } from 'react';
import './App.css';
import ReactHighCharts from 'react-highcharts';
import example1 from './config/chart1.json';
import example2 from './config/chart2.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Highcharts Example</h1>
        </header>
        <div>
        <ReactHighCharts config={example1} ref="chart" />
        <ReactHighCharts config={example2} ref="chart" />        
        </div>
      </div>
    );
  }
}

export default App;
