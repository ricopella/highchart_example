import React, { Component } from 'react';
import './App.css';
import Chart from './components/Chart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src='./fanai_logo.png' className="App-logo" alt="FanAI" />
          <h1 className="App-title">Welcome to FanAI</h1>
        </header>
        <div>
          <Chart/>
        </div>
      </div>
    );
  }
}

export default App;
