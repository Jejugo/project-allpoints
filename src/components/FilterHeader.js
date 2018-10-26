import React, { Component } from 'react';
import '../css/FilterHeader.css'

class FilterHeader extends Component {
  render() {
    return (
      <div>
        <div className="nav-content filterHeader z-depth-2">
          <div className="container">
            <a href="#datas" className="waves-effect waves-light btn-small btn btn-filter modal-trigger">Datas</a>
            <a href="#hospedes" className="waves-effect waves-light btn-small btn btn-filter modal-trigger">Hóspedes</a>
            <a href="#comodidades" className="waves-effect waves-light btn-small btn btn-filter modal-trigger">Comodidades</a>
            <a href="#preco" className="waves-effect waves-light btn-small btn btn-filter modal-trigger">Preço</a>
            <a href="#ratings" className="waves-effect waves-light btn-small btn btn-filter modal-trigger">Ratings</a>
          </div>
        </div>
        <div className="modal" id="datas">
          teste
        </div>
        <div className="modal" id="hospedes">
          <div className="modal-content">
            <div className="col s12 hospedes-line">
              <span>Adultos</span>
              <a className="btn-floating btn-small waves-effect waves-light right filter-modal"><i className="material-icons">remove_circle_outline</i></a>
              <span className="number-guest right">5</span>
              <a className="btn-floating btn-small waves-effect waves-light filter-modal"><i className="material-icons">add_circle_outline</i></a>
            </div>
            <div className="col s12 hospedes-line">
              <span>Criancas</span>
              <a className="btn-floating btn-small waves-effect waves-light right filter-modal"><i className="material-icons">remove_circle_outline</i></a>
              <span className="number-guest right">5</span>
              <a className="btn-floating btn-small waves-effect waves-light right filter-modal"><i className="material-icons">add_circle_outline</i></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterHeader;
