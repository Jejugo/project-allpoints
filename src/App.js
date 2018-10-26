import React, { Component } from 'react';
import logo from './all-points-logo.png';
import Navbar from './components/Navbar';
import Hotels from './components/Hotels';

class App extends Component {

  state = {
    hotels: [
      {name: "Windsor Hotel", availableRooms: [
        {1: "165", numberOfPeople: "3", price: 250, rating: 5 },
        {1: "122", numberOfPeople: "2", price: 150, rating: 4 },
        {1: "131", numberOfPeople: "2", price: 250, rating: 4 },
        {1: "531", numberOfPeople: "1", price: 100, rating: 3 },
        {1: "143", numberOfPeople: "5", price: 400, rating: 5 },
        {1: "431", numberOfPeople: "3", price: 250, rating: 2 },
        {1: "156", numberOfPeople: "10", price: 1020, rating: 5 }
      ]},
      {name: "São Paulo Hotel"},
      {name: "Astron Baden Baden"},
      {name: "Matsuraba Hotel"},
      {name: "Intercontinental"},
      {name: "Astron Baden Baden"},
      {name: "Matsuraba Hotel"},
      {name: "Intercontinental"},
      {name: "Astron Baden Baden"},
      {name: "Matsuraba Hotel"},
      {name: "Intercontinental"},
      {name: "Astron Baden Baden"},
      {name: "Matsuraba Hotel"},
      {name: "Intercontinental"},
      {name: "Astron Baden Baden"}
    ],
    hospedes: null,
    preco: null,
    ratings: null
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
