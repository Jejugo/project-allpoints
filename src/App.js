import React, { Component } from 'react';
import logo from './all-points-logo.png';
import Navbar from './components/Navbar';
import Hotels from './components/Hotels';
import Functions from './functions';


/***  
 *  To start the project just run: "npm install" followed by "npm start".
 * 
 * This project was made having efficiency in mind. That is why I tried to declare every variable used
trying to explicitly describe what each one does. I also tried to describe functions purposes on the comments below.
This code was built also having in mind an automated test enviroment so tags were used for the exact purpose they were created.
Therefore buttons are buttons and not links(<a></a>).

* In addition, I tried to avoid nesting loops even though I had a little time to think of an API format that would not require it.
For that reason I had to implement it in certain parts for the code - unfortuantely.
* To filter the search you can always click on a button (Hospedes, Comodidades, Preço, Ratings) to filter accordingly.
the "Datas" button was NOT implemented.
* To remove a filter just click Limpar and then Apply. 
* The object created below was a representation of an API get request.
* The Ratings are not supposed to be changed since they would come from the server with the average of ratings people rated on some other part - not built - of the website
* You can search for countries such as: "Estados Unidos da América", "Brasil", "Holanda", México", "Nova Zelândia", "Australia"
* To remove the check symbol, click on "Limpar"

Points of improvement: 
* Could have standardized the "API data" instead of creating a new array every filter apply
* Could have created more objects instead of single variables. This way the application has MANY variables being passed through props.
* When Filtering Conveniences, it only shows the result if the hotel offers exactly what the customer ordered. It should be improved to filter properly by filtering what he/she ordered but also showing other options.
* Filtered by Country. Could have created a filter by cities as well.
* Remove check symbol without having to click "Limpar"

***/

class App extends Component {

  state = {
    hotels: [
      {name: "Windsor Hotel", availableRooms: [
        {id: 234324234,room: "165", rating: 5, numberOfPeople: 1, price: 250, comodidades: ["Cafe da Manha", "Wifi Gratis"]},
        {id: 234324322, room: "122", rating: 3, numberOfPeople: 2, price: 150, comodidades: ["Almoco"]},
        {id: 231221321, room: "131", rating: 4, numberOfPeople: 2, price: 250, comodidades: ["Shows Musicais", "Cafe da Manha"]},
        {id: 123121233, room: "531", rating: 1, numberOfPeople: 1, price: 100, comodidades: ["Almoco", "Wifi Gratis"]},
        {id: 321323213, room: "143", rating: 1, numberOfPeople: 5, price: 400, comodidades: ["Almoco", "Shows Musicais"]},
        {id: 232131233,room: "431", rating: 2, numberOfPeople: 3, price: 250, comodidades: ["Cafe da Manha"]},
        {id: 312312213, room: "156", rating: 4, umberOfPeople: 10, price: 1000, comodidades: ["Wifi Gratis"]}
      ],
      url: 'https://www.google.com.br/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjcpIe7waXeAhVHf5AKHYWnBQ8QjRx6BAgBEAU&url=https%3A%2F%2Fwww.idakochi.org%2F&psig=AOvVaw3hxnGGKomSpJjkhZGD3E74&ust=1540691552260583',
      country: 'Estados Unidos da América'
      },
      {name: "São Paulo Hotel", availableRooms: [
        {id: 24324324,room: "876", rating: 3, numberOfPeople: 3, price: 111, comodidades: ["Cafe da Manha"]},
        {id: 11213344, room: "888", rating: 5, numberOfPeople: 2, price: 222, comodidades: ["Almoco", "Wifi Gratis"]},
        {id: 12321311, room: "17731", rating: 3, numberOfPeople: 2, price: 333, comodidades: ["Cafe da Manha", "Almoco"]},
        {id: 93998112, room: "1345", rating: 2, numberOfPeople: 1, price: 444,comodidades: ["Almoco"] },
        {id: 99125611 , room: "14123", rating: 2, numberOfPeople: 5, price: 555, comodidades: ["Wifi Gratis"]},
        {id: 91293102, room: "43211", rating: 4, numberOfPeople: 3, price: 666, comodidades: ["Almoco", "Shows Musicais"]},
        {id: 10310233, room: "23123", rating: 1, numberOfPeople: 10, price: 777, comodidades: ["Shows Musicais", "Cafe da Manha"]}
      ],
      url: 'https://www.google.com.br/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjcpIe7waXeAhVHf5AKHYWnBQ8QjRx6BAgBEAU&url=https%3A%2F%2Fwww.idakochi.org%2F&psig=AOvVaw3hxnGGKomSpJjkhZGD3E74&ust=1540691552260583',
      country: 'Brasil'
      },
      {name: "Astron Baden Baden", availableRooms: [
        {room: "876", rating: 1, numberOfPeople: 3, price: 1000, comodidades: ["Shows Musicais"]},
        {room: "888", rating: 5, numberOfPeople: 2, price: 2000, comodidades: ["Shows Musicais", "Wifi Gratis"]},
        {room: "17731", rating: 3, numberOfPeople: 2, price: 3000, comodidades: ["Almoco", "Wifi Gratis"]},
        {room: "1345", rating: 2, numberOfPeople: 1, price: 4000, comodidades: ["Shows Musicais"]},
        {room: "14123", rating: 1, numberOfPeople: 5, price: 5000, comodidades: ["Shows Musicais", "Wifi Gratis"] },
        {room: "43211", rating: 3, numberOfPeople: 3, price: 6000, comodidades: ["Cafe da Manha", "Almoco"]},
        {room: "23123", rating: 0, numberOfPeople: 10, price: 7000, comodidades: ["Cafe da Manha", "Almoco"]}
      ],
      url: 'https://www.google.com.br/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjcpIe7waXeAhVHf5AKHYWnBQ8QjRx6BAgBEAU&url=https%3A%2F%2Fwww.idakochi.org%2F&psig=AOvVaw3hxnGGKomSpJjkhZGD3E74&ust=1540691552260583',
      country: 'México'
      },
      {name: "Matsuraba Hotel", availableRooms: [
        {room: "876", numberOfPeople: 3, price: 111, rating: 5, comodidades: ["Cafe da Manha", "Almoco"] },
        {room: "888", numberOfPeople: 2, price: 222, rating: 4, comodidades: ["Shows Musicais", "Wifi Gratis"]},
        {room: "17731", numberOfPeople: 2, price: 333, rating: 4, comodidades: ["Shows Musicais"]},
        {room: "1345", numberOfPeople: 1, price: 444, rating: 3, comodidades: ["Cafe da Manha"]},
        {room: "14123", numberOfPeople: 5, price: 555, rating: 5, comodidades: ["Shows Musicais", "Wifi Gratis"] },
        {room: "43211", numberOfPeople: 3, price: 666, rating: 2, comodidades: ["Cafe da Manha"]},
        {room: "23123", numberOfPeople: 10, price: 777, rating: 5, comodidades: ["Cafe da Manha", "Almoco"]}
      ],
      url: 'https://www.google.com.br/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjcpIe7waXeAhVHf5AKHYWnBQ8QjRx6BAgBEAU&url=https%3A%2F%2Fwww.idakochi.org%2F&psig=AOvVaw3hxnGGKomSpJjkhZGD3E74&ust=1540691552260583',
      country: 'Holanda'
    },
      {name: "Intercontinental", availableRooms: [
        {room: "876", numberOfPeople: 3, price: 111, rating: 5 },
        {room: "888", numberOfPeople: 2, price: 222, rating: 4, comodidades: ["Shows Musicais", "Wifi Gratis"] },
        {room: "17731", numberOfPeople: 2, price: 333, rating: 4, comodidades: ["Almoco"] },
        {room: "1345", numberOfPeople: 1, price: 444, rating: 3, comodidades: ["Cafe da Manha", "Almoco"]},
        {room: "14123", numberOfPeople: 5, price: 555, rating: 5, comodidades: ["Cafe da Manha"] },
        {room: "43211", numberOfPeople: 3, price: 666, rating: 2, comodidades: ["Almoco"] },
        {room: "23123", numberOfPeople: 10, price: 777, rating: 5, comodidades: ["Shows Musicais", "Wifi Gratis"] }
      ],
      url: 'https://www.google.com.br/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjcpIe7waXeAhVHf5AKHYWnBQ8QjRx6BAgBEAU&url=https%3A%2F%2Fwww.idakochi.org%2F&psig=AOvVaw3hxnGGKomSpJjkhZGD3E74&ust=1540691552260583',
      country: 'Nova Zelândia'
      },
      {name: "Astron Baden Baden", availableRooms: [
        {room: "876", numberOfPeople: 3, price: 111, rating: 5 },
        {room: "888", numberOfPeople: 2, price: 222, rating: 4, comodidades: ["Shows Musicais"] },
        {room: "17731", numberOfPeople: 2, price: 333, rating: 4, comodidades: ["Cafe da Manha", "Almoco"] },
        {room: "1345", numberOfPeople: 1, price: 444, rating: 3, comodidades: ["Cafe da Manha"] },
        {room: "14123", numberOfPeople: 5, price: 555, rating: 5, comodidades: ["Shows Musicais"] },
        {room: "43211", numberOfPeople: 3, price: 666, rating: 2, comodidades: ["Almoco"] },
        {room: "23123", numberOfPeople: 10, price: 777, rating: 5, comodidades: ["Shows Musicais"] }
      ],
      url: 'https://www.google.com.br/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjcpIe7waXeAhVHf5AKHYWnBQ8QjRx6BAgBEAU&url=https%3A%2F%2Fwww.idakochi.org%2F&psig=AOvVaw3hxnGGKomSpJjkhZGD3E74&ust=1540691552260583',
      country: 'Australia'}
    ],
    filteredHotels: null,
    hospedes: {
      adultos: 0,
      criancas: 0,
      errorMessage: ''
    },
    preco: 0,
    comodidades: {
      cafeDaManha: false,
      almoco: false,
      wifiGratis: false,
      showsMusicais: false
    },
    country: '',
    numberHotels: null,
    ratingValue: 0,
    check: {
      checkGuest: false,
      checkPrice: false,
      checkRatings: false,
      checkConvenience: false
    }
  }

  apply = (e) => {
    e.preventDefault();
    console.log(e);

    //Declaring values that will be used to filter the Hotels.
    const aux = this.state.hotels;
    const auxAdultos = this.state.hospedes.adultos;
    const auxCriancas = this.state.hospedes.criancas;
    const comodidades = this.state.comodidades;
    const preco = this.state.preco;
    const country = this.state.country;
    const rating = this.state.ratingValue;

    //create an array with values that are true for conviences
    const comodidadeTrue = Object.keys(comodidades).filter(k => {
      return comodidades[k] === true;
    });

    console.log(comodidadeTrue);

    let filteredHotels = [];


    if (country !== ''){

      //get a list of every room available
      aux.map(hotel => {
        if(hotel.availableRooms !== undefined){
          hotel.availableRooms.map(room => {
            filteredHotels.push({name: hotel.name, price: room.price, rating: room.rating, country: hotel.country, comodidades: room.comodidades, numberOfPeople: room.numberOfPeople})
            return null;
          });
        }
        return null;
      });

      //filtering by country
      filteredHotels = filteredHotels.filter(room => {
        return room.country === country;
      });
 
      //filter by Guests based on User Input and summing the total number of people.
      if(auxAdultos !== 0 || auxCriancas !== 0){
        console.log("Esse eh o array!");
        console.log(filteredHotels);
        filteredHotels = filteredHotels.filter(room => {
          return room.numberOfPeople === (auxAdultos + auxCriancas);
        });
        this.setState((previous)=>({
          check: {...previous.check, checkGuest: true}
        }));
      }

      //filter by Conveniences
      if (comodidadeTrue.length > 0){
        console.log("entrou");
        filteredHotels = filteredHotels.filter(room => {
          if (room.comodidades !== undefined){
            let newComodidades = Functions.arrayCamelize(room.comodidades);
            return newComodidades.sort().join(',') === comodidadeTrue.sort().join(',') ? true : false;
          }
          return null;
        });
        this.setState((previous)=>({
          check: {...previous.check, checkConvenience: true}
        }));
      }

      //filter by Price
      if (preco > 0){
        filteredHotels = filteredHotels.filter(room => {
          return room.price <= preco;
        });
        this.setState((previous)=>({
          check: {...previous.check, checkPrice: true}
        }));
      }

      //filter by Ratings
      if (rating !== 0){
        filteredHotels = filteredHotels.filter(room => {
          return room.rating == rating;
        });
        this.setState((previous)=>({
          check: {...previous.check, checkRatings: true}
        }));
      }

    }
    else{
      aux.map(hotel => {
        if(hotel.availableRooms !== undefined){
          hotel.availableRooms.map(room => {
            filteredHotels.push({name: hotel.name, price: room.price, rating: room.rating, country: hotel.country, comodidades: room.comodidades, numberOfPeople: room.numberOfPeople})
            return null;
          }); 
        }
        return null;
      });

       //filter by Guests based on User Input and summing the total number of people.
       if(auxAdultos !== 0 || auxCriancas !== 0){
        console.log("Esse eh o array!");
        console.log(filteredHotels);
        filteredHotels = filteredHotels.filter(room => {
          return room.numberOfPeople === (auxAdultos + auxCriancas);
        });
        this.setState((previous)=>({
          check: {...previous.check, checkGuest: true}
        }));
      }

      //filter by Conveniences
      if (comodidadeTrue.length > 0){
        console.log("entrou");
        filteredHotels = filteredHotels.filter(room => {
          if (room.comodidades !== undefined){
            let newComodidades = Functions.arrayCamelize(room.comodidades);
            return newComodidades.sort().join(',') === comodidadeTrue.sort().join(',') ? true : false;
          }
          return null;
        });
        this.setState((previous)=>({
          check: {...previous.check, checkConvenience: true}
        }));
      }

      //filter by Price
      if (preco > 0){
        filteredHotels = filteredHotels.filter(room => {
          return room.price <= preco;
        });
        this.setState((previous)=>({
          check: {...previous.check, checkPrice: true}
        }));
      }

      //filter by Ratings
      if (rating !== 0){
        filteredHotels = filteredHotels.filter(room => {
          return room.rating == rating;
        });
        this.setState((previous)=>({
          check: {...previous.check, checkRatings: true}
        }));
      }
    }

    this.setState({
      filteredHotels: filteredHotels,
      numberHotels: filteredHotels.length
    });

  }

  resetPrice = (e) => {
    this.setState((previous)=>({
      preco: 0,
      check: {...previous.check, checkPrice: false}
    }));
  }

  //Function used to reset state values and bring the filter to an initial state.
  resetGuestValues = (e) => {
    this.setState((previous)=>({
      hospedes: {adultos: 0, criancas: 0},
      check: {...previous.check, checkGuest: false}
    }));
  }

  handleComodidades = (e) => {
    const name = e.target.name;
    let comodidades = this.state.comodidades;
    if(name === "deleteConveniences"){
      const values = Object.keys(comodidades)
      values.forEach(item => {
        this.setState((previous) => ({
          comodidades: {...previous.comodidades, [item]: false},
          check: {...previous.check, checkConvenience: false}
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

    if(auxAdulto+1 === 6){
      console.log("opa!");
      this.setState((previousState)=>({
        hospedes: {...previousState.hospedes, errorMessage: 'Não é permitido acima de 5 adultos'}
      }))
    }
    if(auxCriancas+1 === 6){
      this.setState((previousState)=>({
        hospedes: {...previousState.hospedes, errorMessage: 'Não é permitido acima de 5 criancas'}
      }))
    }

    auxAdulto > 0 && (
      e.currentTarget.value === 'removeAdult' && (
        this.setState((previousState) => ({
          hospedes: {...previousState.hospedes, adultos: previousState.hospedes.adultos-1, errorMessage: ''}
        }))
      )
    );
    auxAdulto < 5 && (
      e.currentTarget.value === "addAdult" && (
        this.setState((previousState) => ({
          hospedes: {...previousState.hospedes, adultos: previousState.hospedes.adultos+1, errorMessage: ''}
        }))
      ) 
    )
    auxCriancas > 0 && (
      e.currentTarget.value === 'removeChild' && (
        this.setState((previousState) => ({
          hospedes: {...previousState.hospedes, criancas: previousState.hospedes.criancas-1, errorMessage: ''}
        }))
      )
    )
    auxCriancas < 5 && (
      e.currentTarget.value === 'addChild' && (
        this.setState((previousState) => ({
          hospedes: {...previousState.hospedes, criancas: previousState.hospedes.criancas+1, errorMessage: ''}
        }))
      )
    )

  }

  handleInputDestination = (e) => {
    this.setState({
      country: e.target.value
    });
  }

  changeRating = (e) => {
    this.setState({
      ratingValue: e.target.value
    })
  }

  resetRating = (e) => {
    this.setState((previous)=>({
      ratingValue: 0,
      check: {...previous.check, checkRatings: false}
    }));
  }


  render() {

    const { hotels, hospedes, filteredHotels, comodidades, preco, country, numberHotels, ratingValue, check }= this.state;

    

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
        handleInputDestination={this.handleInputDestination}
        country={country}
        numberHotels={numberHotels}
        ratingValue={ratingValue}
        changeRating={this.changeRating}
        resetRating={this.resetRating}
        check={check}
        >
        </Navbar>
        <div id="mainPage">
        <Hotels hotels={hotels} filteredHotels={filteredHotels} hospedes={hospedes} changeRating={this.changeRating}></Hotels>
        </div>
      </div>     
    );
  }
}

export default App;
