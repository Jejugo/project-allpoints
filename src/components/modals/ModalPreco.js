import React, { Component } from 'react';
import '../../css/FilterHeader.css'

const ModalPreco = (props) => {

  const { changePrice, preco, apply, resetPrice } = props;

  return(
    <div className="modal modal-hotel" id="preco">
      <div className="modal-content">
        <h4 className="center comodidades-titulo" style={{margin: "2% 0 15% 0"}}>Diária</h4>
        <form action="#">
          <p className="range-field">
            <input type="range" id="test5" min="0" max="1000" value={preco} onChange={(e) => changePrice(e)}/>
          </p>
        </form>
        <div>
        <a href="#" className="left hospedes-bottom" onClick={(e) => resetPrice(e)}>Limpar</a>
        <a href="#" className="right hospedes-bottom apply" onClick={(e) => apply(e)}>Aplicar</a>
      </div>
      </div>
    </div>
  );

}

export default ModalPreco;