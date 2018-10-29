import React, { Component } from 'react';
import '../css/Navbar.css'
import FilterHeader from './FilterHeader';

class Navbar extends Component {
  render() {
    const { logo,changeHospedes, hospedes, resetGuestValues, apply, handleComodidades, comodidades, changePrice, preco, resetPrice, handleInputDestination, country, numberHotels, ratingValue, changeRating, resetRating} = this.props;

    return (
      <div id="nav">
        <nav className="nav-extended header">
          <div className="nav-wrapper">
            <div className="container">
              <div className="row">
                <div className="navbar-top">
                <a data-target="mobile-demo" className="col s1 sidenav-trigger"><i className="material-icons right">menu</i></a>
                <a className="col s8 m8 l1 center-align">
                    <img src={logo} alt='All Points Logo' style={{height: '40px', verticalAlign: 'middle'}}/>
                  </a>
                  <div className="container">
                  <form onSubmit={(e) => apply(e)}>
                    <div className="input-field col l7 s12 input-field-app input-top">
                      <input name="destination" type="text" className="autocomplete" onChange={(e) => handleInputDestination(e)}/>
                      <label htmlFor="destination">Destino: </label>
                    </div>
                  </form>
                  </div>
                  <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Faça a sua reserva</a></li>
                    <li><a href="badges.html">Troque seus pontos</a></li>
                    <li><a href="collapsible.html">Login</a></li>
                  </ul>
                </div>
              </div>
              <div id="header-content">
                <h3 id="country-title">{country}</h3>
                {numberHotels === null ? (
                  <p>Busque um hotel</p>
                ): (
                  <p>Encontramos {numberHotels} Hoteis</p>
                )}
                
                <a className="btn btn-destination" id="destination">Alterar Destino</a>
                <div className="row search-bar-header">
                <form onSubmit={(e) => apply(e)}>
                  <div className="input-field col s6 input-field-app">
                    <label htmlFor="destination">Destino: </label>
                    <input name="destination" type="text" className="input-header" onChange={(e) => handleInputDestination(e)} />
                  </div>
                </form>
                </div>
              </div>
              
            </div>
          </div>
        </nav>

        <FilterHeader changeHospedes={changeHospedes} 
        hospedes={hospedes} 
        resetGuestValues={resetGuestValues} 
        apply={apply} handleComodidades={handleComodidades} 
        comodidades={comodidades} 
        changePrice={changePrice} 
        preco={preco}
        resetPrice={resetPrice}
        ratingValue={ratingValue}
        changeRating={changeRating}
        resetRating={resetRating}
        >
        </FilterHeader>
        <ul className="sidenav" id="mobile-demo">
          <li><a href="sass.html">Faça a sua reserva</a></li>
          <li><a href="badges.html">Troque seus pontos</a></li>
          <li><a href="collapsible.html">Login</a></li>
        </ul>

      </div>
    );
  }
}

export default Navbar;
