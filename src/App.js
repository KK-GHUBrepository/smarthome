import React, { Component } from 'react';
import Header from './Components/Header';
import Filter from './Components/Filter';
import Devices from './Components/Devices';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Filter />
        <Devices />

      </div>
    );
  }
}

export default App;
