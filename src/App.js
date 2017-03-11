import React, { Component } from 'react';
import logo from './logo.svg';
import Button from 'react-toolbox/lib/button/Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-wrapper">
        <Button raised primary>Test</Button>
          <div className="App-preview"></div>
          <div className="App-content"></div>
        </div>
      </div>
    );
  }
}

export default App;
