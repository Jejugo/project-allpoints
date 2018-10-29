import React, { Component } from 'react';
import '../css/FilterHeader.css'
import ModalHospede from './modals/ModalHospede';
import ModalComodidade from './modals/ModalComodidade';
import ModalPreco from './modals/ModalPreco';
import ModalRating from './modals/ModalRating';

class FilterHeader extends Component {
  render() {

    const { changeHospedes, hospedes, resetGuestValues, apply, handleComodidades, comodidades, changePrice, preco, resetPrice, ratingValue, changeRating, resetRating } = this.props;


    return (
      <div>
        <div className="nav-content filterHeader z-depth-2">
          <div className="container">
            <button className="waves-effect waves-light btn-small btn btn-filter datepicker">Datas</button>
            <button href="#hospedes" className="waves-effect waves-light btn-small btn btn-filter modal-trigger">{hospedes.adultos + hospedes.criancas} Hóspedes</button>
            <button href="#comodidades" className="waves-effect waves-light btn-small btn btn-filter modal-trigger">Comodidades</button>
            <button href="#preco" className="waves-effect waves-light btn-small btn btn-filter modal-trigger">Preço</button>
            <button href="#ratings" className="waves-effect waves-light btn-small btn btn-filter modal-trigger">Ratings</button>
          </div>
        </div>
        <ModalHospede changeHospedes={changeHospedes} hospedes={hospedes} resetGuestValues={resetGuestValues} apply={apply}></ModalHospede>
        <ModalComodidade handleComodidades={handleComodidades} comodidades={comodidades} apply={apply}></ModalComodidade>
        <ModalPreco changePrice={changePrice} preco={preco} apply={apply} resetPrice={resetPrice}></ModalPreco>
        <ModalRating ratingValue={ratingValue} apply={apply} changeRating={changeRating} resetRating={resetRating}></ModalRating>
      </div>
    );
  }
}

export default FilterHeader;
