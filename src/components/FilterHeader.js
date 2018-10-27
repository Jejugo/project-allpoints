import React, { Component } from 'react';
import '../css/FilterHeader.css'
import ModalHospede from './modals/ModalHospede';
import ModalData from './modals/ModalData';
import ModalComodidade from './modals/ModalComodidade';
import ModalPreco from './modals/ModalPreco';
import ModalRating from './modals/ModalRating';

class FilterHeader extends Component {
  render() {

    const { changeHospedes, hospedes, resetGuestValues, apply } = this.props;


    return (
      <div>
        <div className="nav-content filterHeader z-depth-2">
          <div className="container">
            <button href="#datas" className="waves-effect waves-light btn-small btn btn-filter modal-trigger">Datas</button>
            <button href="#hospedes" className="waves-effect waves-light btn-small btn btn-filter modal-trigger">{hospedes.adultos + hospedes.criancas} Hóspedes</button>
            <button href="#comodidades" className="waves-effect waves-light btn-small btn btn-filter modal-trigger">Comodidades</button>
            <button href="#preco" className="waves-effect waves-light btn-small btn btn-filter modal-trigger">Preço</button>
            <button href="#ratings" className="waves-effect waves-light btn-small btn btn-filter modal-trigger">Ratings</button>
          </div>
        </div>
        <ModalData></ModalData>
        <ModalHospede changeHospedes={changeHospedes} hospedes={hospedes} resetGuestValues={resetGuestValues} apply={apply}></ModalHospede>
        <ModalComodidade></ModalComodidade>
        <ModalPreco></ModalPreco>
        <ModalRating></ModalRating>
      </div>
    );
  }
}

export default FilterHeader;
