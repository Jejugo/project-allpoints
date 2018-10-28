import React, { Component } from 'react';
import logo from './all-points-logo.png';
import Navbar from './components/Navbar';
import Hotels from './components/Hotels';
import Functions from './functions';


//  This project was made having efficiency in mind. That is why I tried to declare every variable used
//trying to explicitly describe what each one does. I also tried to describe functions purposes on the comments below.
//This code was built also having in mind an automated test enviroment so tags were used for the exact purpose they were created.
//Therefore buttons are buttons and not links(<a></a>).

//In addition, I tried to avoid nesting loops even though I had a little time to think of an API format that would not require it.
//For that reason I had to implement it in certain parts for the code - unfortuantely.

//The object created below was a representation of an API get request.

class App extends Component {

  state = {
    hotels: [
      {name: "Windsor Hotel", availableRooms: [
        {id: 234324234,room: "165", numberOfPeople: 1, price: 250, rating: 5, comodidades: ["Cafe da Manha", "Wifi Gratis"]},
        {id: 234324322, room: "122", numberOfPeople: 2, price: 150, rating: 4, comodidades: ["Almoco"]},
        {id: 231221321, room: "131", numberOfPeople: 2, price: 250, rating: 4, comodidades: ["Shows Musicais", "Cafe da Manha"]},
        {id: 123121233, room: "531", numberOfPeople: 1, price: 100, rating: 3, comodidades: ["Almoco", "Wifi Gratis"]},
        {id: 321323213, room: "143", numberOfPeople: 5, price: 400, rating: 5, comodidades: ["Almoco", "Shows Musicais"]},
        {id: 232131233,room: "431", numberOfPeople: 3, price: 250, rating: 2, comodidades: ["Cafe da Manha"]},
        {id: 312312213, room: "156", numberOfPeople: 10, price: 1000, rating: 5, comodidades: ["Wifi Gratis"]}
      ],
      url: 'https://www.google.com.br/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjcpIe7waXeAhVHf5AKHYWnBQ8QjRx6BAgBEAU&url=https%3A%2F%2Fwww.idakochi.org%2F&psig=AOvVaw3hxnGGKomSpJjkhZGD3E74&ust=1540691552260583',
      country: 'United State of America'
      },
      {name: "São Paulo Hotel", availableRooms: [
        {id: 24324324,room: "876", numberOfPeople: 3, price: 111, rating: 5, comodidades: ["Cafe da Manha"]},
        {id: 11213344, room: "888", numberOfPeople: 2, price: 222, rating: 4, comodidades: ["Almoco", "Wifi Gratis"]},
        {id: 12321311, room: "17731", numberOfPeople: 2, price: 333, rating: 4, comodidades: ["Cafe da Manha", "Almoco"]},
        {id: 93998112, room: "1345", numberOfPeople: 1, price: 444, rating: 3, comodidades: ["Almoco"] },
        {id: 99125611 , room: "14123", numberOfPeople: 5, price: 555, rating: 5, comodidades: ["Wifi Gratis"]},
        {id: 91293102, room: "43211", numberOfPeople: 3, price: 666, rating: 2, comodidades: ["Almoco", "Shows Musicais"]},
        {id: 10310233, room: "23123", numberOfPeople: 10, price: 777, rating: 5, comodidades: ["Shows Musicais", "Cafe da Manha"]}
      ],
      url: 'https://www.google.com.br/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjcpIe7waXeAhVHf5AKHYWnBQ8QjRx6BAgBEAU&url=https%3A%2F%2Fwww.idakochi.org%2F&psig=AOvVaw3hxnGGKomSpJjkhZGD3E74&ust=1540691552260583',
      country: 'Brazil'
      },
      {name: "Astron Baden Baden", availableRooms: [
        {room: "876", numberOfPeople: 3, price: 1000, rating: 5, comodidades: ["Shows Musicais"]},
        {room: "888", numberOfPeople: 2, price: 2000, rating: 4, comodidades: ["Shows Musicais", "Wifi Gratis"]},
        {room: "17731", numberOfPeople: 2, price: 3000, rating: 4, comodidades: ["Almoco", "Wifi Gratis"]},
        {room: "1345", numberOfPeople: 1, price: 4000, rating: 3, comodidades: ["Shows Musicais"]},
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
      country: 'The Netherlands'
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
      adultos: 0,
      criancas: 0
    },
    preco: 0,
    ratings: 0,
    comodidades: {
      cafeDaManha: false,
      almoco: false,
      wifiGratis: false,
      showsMusicais: false
    }
  }

  apply = (e) => {
    //Declaring values that will be used to filter the Hotels.
    const aux = this.state.hotels;
    const auxAdultos = this.state.hospedes.adultos;
    const auxCriancas = this.state.hospedes.criancas;
    const comodidades = this.state.comodidades;
    const preco = this.state.preco;

    //create an array with values that are true for conviences
    const comodidadeTrue = Object.keys(comodidades).filter(k => {
      return comodidades[k] === true;
    });

    console.log(comodidadeTrue);

    let filteredHotels = [];

    //filter by Guests based on User Input and summing the total number of people.
    if(auxAdultos !== 0 || auxCriancas !== 0){
      filteredHotels = [];
      aux.map(hotel => {
        if(hotel.availableRooms !== undefined){
            hotel.availableRooms.map(room => {
            if(room.numberOfPeople === (auxAdultos + auxCriancas)){
              filteredHotels.push({name: hotel.name, room: room, price: room.price, rating: room.rating, country: hotel.country, comodidades: room.comodidades})
            }
            return null
          });
        }
      });
    }
    else{
      filteredHotels = [];
      aux.map(hotel => {
        if(hotel.availableRooms !== undefined){
            hotel.availableRooms.map(room => {
              filteredHotels.push({name: hotel.name, room: room, price: room.price, rating: room.rating, country: hotel.country, comodidades: room.comodidades})
            return null
          });
        }
      });
    }
    

    console.log("First Filter");
    console.log(filteredHotels);

    //filter by Conveniences
    if (comodidadeTrue.length > 0){
      console.log("entrou");
      filteredHotels = filteredHotels.filter(room => {
        if (room.comodidades !== undefined){
          let newComodidades = Functions.arrayCamelize(room.comodidades);
          return newComodidades.sort().join(',') === comodidadeTrue.sort().join(',') ? true : false;
        }
        
      });
    }
    console.log("Second Filter");
    console.log(filteredHotels);

    //filter by Price
    if (preco > 0){
      filteredHotels = filteredHotels.filter(room => {
        return room.price <= preco;
      });
    }

    console.log("Third Filter");
    console.log(filteredHotels);

    //

    this.setState({
      filteredHotels: filteredHotels
    });

  }

  resetPrice = (e) => {
    this.setState({
      preco: 0
    });

    this.apply();
  }

  //Function used to reset state values and bring the filter to an initial state.
  resetGuestValues = (e) => {
    this.setState({
      hospedes: {adultos: 0, criancas: 0}
    });

    this.apply();
  }

  handleComodidades = (e) => {
    const name = e.target.name;
    let comodidades = this.state.comodidades;
    if(name === "deleteConveniences"){
      const values = Object.keys(comodidades)
      values.forEach(item => {
        this.setState((previous) => ({
          comodidades: {...previous.comodidades, [item]: false}
        }))
      });

    }
    else{
      this.setState((previous)=>({
        comodidades: {...previous.comodidades, [name]: previous.comodidades[name] === false ? true : false}
      }))
    }
  }

  changePrice = (e) => {
    this.setState({
      preco: e.target.value 
    })
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

  render() {

    const { hotels, hospedes, filteredHotels, comodidades, preco}= this.state;

    

    return (
      <div>
        <Navbar logo={logo} changeHospedes={this.changeHospedes} 
        hospedes={hospedes} 
        resetGuestValues={this.resetGuestValues} 
        apply={this.apply}
        handleComodidades={this.handleComodidades}
        comodidades={comodidades}
        changePrice={this.changePrice}
        preco={preco}
        resetPrice={this.resetPrice}
        >
        </Navbar>
        <div id="mainPage">
        <Hotels hotels={hotels} filteredHotels={filteredHotels} hospedes={hospedes}></Hotels>
        </div>
      </div>     
    );
  }
}

export default App;
