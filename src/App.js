import React, { Component } from 'react';
import logo from './all-points-logo.png';
import Navbar from './components/Navbar';
import Hotels from './components/Hotels';

class App extends Component {

  state = {
    hotels: [
      {name: "Windsor Hotel"},
      {name: "São Paulo Hotel"},
      {name: "Astron Baden Baden"},
      {name: "Matsuraba Hotel"},
      {name: "Intercontinental"},
    ]
  }

  render() {

    const { hotels } = this.state;

    return (
      <div>
        <Navbar logo={logo}></Navbar>
        <div id="mainPage">
        <Hotels hotels={hotels}></Hotels>
        </div>
      </div>     
    );
  }
}

export default App;
