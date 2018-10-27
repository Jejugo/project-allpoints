import React, { Component } from 'react';
import logo from './all-points-logo.png';
import Navbar from './components/Navbar';
import Hotels from './components/Hotels';

class App extends Component {

  state = {
    hotels: [
      {name: "Windsor Hotel", availableRooms: [
        {room: "165", numberOfPeople: 1, price: 250, rating: 5 },
        {room: "122", numberOfPeople: 2, price: 150, rating: 4 },
        {room: "131", numberOfPeople: 2, price: 250, rating: 4 },
        {room: "531", numberOfPeople: 1, price: 100, rating: 3 },
        {room: "143", numberOfPeople: 5, price: 400, rating: 5 },
        {room: "431", numberOfPeople: 3, price: 250, rating: 2 },
        {room: "156", numberOfPeople: 10, price: 1020, rating: 5 }
      ],
      url: 'https://www.google.com.br/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjcpIe7waXeAhVHf5AKHYWnBQ8QjRx6BAgBEAU&url=https%3A%2F%2Fwww.idakochi.org%2F&psig=AOvVaw3hxnGGKomSpJjkhZGD3E74&ust=1540691552260583',
      country: 'United State of America'
      },
      {name: "São Paulo Hotel", availableRooms: [
        {room: "876", numberOfPeople: 3, price: 111, rating: 5 },
        {room: "888", numberOfPeople: 2, price: 222, rating: 4 },
        {room: "17731", numberOfPeople: 2, price: 333, rating: 4 },
        {room: "1345", numberOfPeople: 1, price: 444, rating: 3 },
        {room: "14123", numberOfPeople: 5, price: 555, rating: 5 },
        {room: "43211", numberOfPeople: 3, price: 666, rating: 2 },
        {room: "23123", numberOfPeople: 10, price: 777, rating: 5 }
      ],
      url: 'https://www.google.com.br/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjcpIe7waXeAhVHf5AKHYWnBQ8QjRx6BAgBEAU&url=https%3A%2F%2Fwww.idakochi.org%2F&psig=AOvVaw3hxnGGKomSpJjkhZGD3E74&ust=1540691552260583',
      country: 'Brazil'
      },
      {name: "Astron Baden Baden", availableRooms: [
        {room: "876", numberOfPeople: 3, price: 1000, rating: 5 },
        {room: "888", numberOfPeople: 2, price: 2000, rating: 4 },
        {room: "17731", numberOfPeople: 2, price: 3000, rating: 4 },
        {room: "1345", numberOfPeople: 1, price: 4000, rating: 3 },
        {room: "14123", numberOfPeople: 5, price: 5000, rating: 5 },
        {room: "43211", numberOfPeople: 3, price: 6000, rating: 2 },
        {room: "23123", numberOfPeople: 10, price: 7000, rating: 5 }
      ],
      url: 'https://www.google.com.br/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjcpIe7waXeAhVHf5AKHYWnBQ8QjRx6BAgBEAU&url=https%3A%2F%2Fwww.idakochi.org%2F&psig=AOvVaw3hxnGGKomSpJjkhZGD3E74&ust=1540691552260583',
      country: 'Mexico'
      },
      {name: "Matsuraba Hotel", availableRooms: [
        {room: "876", numberOfPeople: 3, price: 111, rating: 5 },
        {room: "888", numberOfPeople: 2, price: 222, rating: 4 },
        {room: "17731", numberOfPeople: 2, price: 333, rating: 4 },
        {room: "1345", numberOfPeople: 1, price: 444, rating: 3 },
        {room: "14123", numberOfPeople: 5, price: 555, rating: 5 },
        {room: "43211", numberOfPeople: 3, price: 666, rating: 2 },
        {room: "23123", numberOfPeople: 10, price: 777, rating: 5 }
      ],
      url: 'https://www.google.com.br/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjcpIe7waXeAhVHf5AKHYWnBQ8QjRx6BAgBEAU&url=https%3A%2F%2Fwww.idakochi.org%2F&psig=AOvVaw3hxnGGKomSpJjkhZGD3E74&ust=1540691552260583',
      country: 'Russia'
    },
      {name: "Intercontinental", availableRooms: []},
      {name: "Astron Baden Baden", availableRooms: []},
      {name: "Matsuraba Hotel", availableRooms: []},
      {name: "Intercontinental", availableRooms: []},
      {name: "Astron Baden Baden", availableRooms: []},
      {name: "Matsuraba Hotel", availableRooms: []},
      {name: "Intercontinental", availableRooms: []},
      {name: "Astron Baden Baden", availableRooms: []},
      {name: "Matsuraba Hotel", availableRooms: []},
      {name: "Intercontinental", availableRooms: []},
      {name: "Astron Baden Baden", availableRooms: [] }
    ],
    filteredHotels: null,
    hospedes: {
      adultos: null,
      criancas: null
    },
    preco: 0,
    ratings: 0
  }


  apply = (e) => {
    const aux = this.state.hotels;
    const auxAdultos = this.state.hospedes.adultos;
    const auxCriancas = this.state.hospedes.criancas;
    let filteredHotels = [];
    aux.forEach(hotel => {
      if(hotel.availableRooms !== undefined){
          hotel.availableRooms.forEach(room => {
          if(room.numberOfPeople === (auxAdultos + auxCriancas)){
            console.log(room);
            filteredHotels.push({name: hotel.name, room: room, price: room.price, rating: room.rating})
          }
          return null
        });
      }
    });

    console.log(filteredHotels)

    this.setState({
      filteredHotels: filteredHotels
    });

  }

  changeHospedes = (e) => {
    const auxAdulto = this.state.hospedes.adultos;
    const auxCriancas = this.state.hospedes.criancas;
    auxAdulto > 0 && (
      e.currentTarget.value === 'removeAdult' && (
        this.setState((previousState) => ({
          hospedes: {...previousState.hospedes, adultos: previousState.hospedes.adultos-1}
        }))
      )
    );
    auxAdulto < 5 && (
      e.currentTarget.value === "addAdult" && (
        this.setState((previousState) => ({
          hospedes: {...previousState.hospedes, adultos: previousState.hospedes.adultos+1}
        }))
      ) 
    )
    auxCriancas > 0 && (
      e.currentTarget.value === 'removeChild' && (
        this.setState((previousState) => ({
          hospedes: {...previousState.hospedes, criancas: previousState.hospedes.criancas-1}
        }))
      )
    )
    auxCriancas < 5 && (
      e.currentTarget.value === 'addChild' && (
        this.setState((previousState) => ({
          hospedes: {...previousState.hospedes, criancas: previousState.hospedes.criancas+1}
        }))
      )
    )

  }

  resetGuestValues = (e) => {
    this.setState({
      hospedes: {adultos: 0, criancas: 0}
    });
  }

  render() {

    const { hotels, hospedes, filteredHotels }= this.state;

    

    return (
      <div>
        <Navbar logo={logo} changeHospedes={this.changeHospedes} hospedes={hospedes} resetGuestValues={this.resetGuestValues} apply={this.apply}></Navbar>
        <div id="mainPage">
        <Hotels hotels={hotels} filteredHotels={filteredHotels} hotels={hotels} hospedes={hospedes}></Hotels>
        </div>
      </div>     
    );
  }
}

export default App;
