import React from 'react';
import '../../css/FilterHeader.css';

const ModalRating = (props) => {

  const { ratingValue, changeRating, resetRating, apply } = props;

  return(
    <div className="modal modal-hotel" id="ratings">
      <div className="modal-content">
        <h4 className="center comodidades-titulo" style={{margin: "2% 0 15% 0"}}>Ratings</h4>
        <form action="#">
          <p className="range-field">
            <input type="range" min="0" max="5" value={ratingValue} onChange={(e) => changeRating(e)}/>
          </p>
        </form>
        <div>
          <a href="#" className="left hospedes-bottom" onClick={(e) => resetRating(e)}>Limpar</a>
          <a href="#" className="right hospedes-bottom apply" onClick={(e) => apply(e)}>Aplicar</a>
        </div>
      </div>
    </div>
  );
}

export default ModalRating;