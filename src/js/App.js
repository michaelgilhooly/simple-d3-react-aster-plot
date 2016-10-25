import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';
import '../css/style.css';
import asterplot from './../jsx/asterplot.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/js/App.js</code> and save to reload.
        </p>
        <p>
        	This is a new application
        </p>
        <div>
          Aster Plot
          {asterplot}
        </div>
      </div>
    );
  }
}

export default App;
