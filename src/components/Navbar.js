import React, { Component } from 'react';
import '../css/Navbar.css'
import FilterHeader from './FilterHeader';

class Navbar extends Component {
  render() {
    const { logo,changeHospedes, hospedes, resetGuestValues, apply, handleComodidades, comodidades, changePrice, preco, resetPrice} = this.props;

    return (
      <div id="nav">
        <nav className="nav-extended header">
          <div className="nav-wrapper">
            <div className="container">
              <div id="header-buttons">
                <a className="brand-logo">
                  <img src={logo} alt='All Points Logo' style={{height: '40px', verticalAlign: 'middle'}}/>
                </a>
                <a data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons right">menu</i></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="sass.html">Faça a sua reserva</a></li>
                  <li><a href="badges.html">Troque seus pontos</a></li>
                  <li><a href="collapsible.html">Login</a></li>
                </ul>
              </div>
              <div id="header-content">
                <h3 id="country-title">Amsterdã, Reino dos Paises Baixos</h3>
                <p>Encontramos 209 Hoteis</p>
                <a className="btn btn-destination" id="destination">Alterar Destino</a>
                <div className="row search-bar-header">
                  <div class="input-field col s6">
                    <label className="active" for="destination">Write your Destination: </label>
                    <input name="destination" type="text" class="validate input-header"/>
                  </div>
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
