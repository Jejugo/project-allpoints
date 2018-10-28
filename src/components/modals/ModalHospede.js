import React from 'react';
import '../../css/FilterHeader.css'

const ModalHospede = (props) => {

  const { changeHospedes, hospedes, resetGuestValues, apply } = props;

  return(
    <div className="modal modal-hotel" id="hospedes">
    <div className="modal-content">
      <div className="col s12 hospedes-line">
        <span>Adultos</span>
        <button className="btn-floating btn-small waves-effect btn waves-light right filter-modal" onClick={(e) => changeHospedes(e)} value="addAdult"><i className="material-icons">add_circle_outline</i></button>
        <span className="number-guest right">{hospedes.adultos === null ? 0 : hospedes.adultos}</span>
        <button className="btn-floating btn-small waves-effect btn waves-light right filter-modal" onClick={(e) => changeHospedes(e)} value="removeAdult"><i className="material-icons">remove_circle_outline</i></button>
      </div>
      <div className="col s12 hospedes-line">
        <span>Criancas</span>
        <button className="btn-floating btn-small waves-effect btn waves-light right filter-modal" onClick={(e) => changeHospedes(e)} value="addChild"><i className="material-icons">add_circle_outline</i></button>
        <span className="number-guest right">{hospedes.criancas === null ? 0 : hospedes.criancas}</span>
        <button className="btn-floating btn-small waves-effect btn waves-light right filter-modal" onClick={(e) => changeHospedes(e)} value="removeChild"><i className="material-icons">remove_circle_outline</i></button>
      </div>
      <hr></hr>
      <div>
        <a href="#" className="left hospedes-bottom" onClick={(e) => resetGuestValues(e)}>Limpar</a>
        <a href="#" className="right hospedes-bottom apply" onClick={(e) => apply(e)}>Aplicar</a>
      </div>
    </div>
  </div>    
  );

}

export default ModalHospede;