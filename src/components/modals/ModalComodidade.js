import React from 'react';
import '../../css/FilterHeader.css'

const ModalComodidade = (props) => {

  const { handleComodidades, comodidades, apply } = props;

  return(
    <div className="modal modal-hotel" id="comodidades">
      <div className="modal-content">
      <h4 className="center comodidades-titulo" style={{margin: "2% 0 10% 0"}}>Comodidades</h4>
        <form>
          <p>
            <label>
              <input className="checkbox" type="checkbox" name="cafeDaManha" value={comodidades.cafeDaManha} checked={comodidades.cafeDaManha} onChange={(e) => handleComodidades(e)}/>
              <span>Café da Manhã</span>
            </label>
          </p>
          <p>
            <label>
              <input className="checkbox" type="checkbox" name="almoco" value={comodidades.almoco} checked={comodidades.almoco} onChange={(e) => handleComodidades(e)}/>
              <span>Almoço</span>
            </label>
          </p>
          <p>
            <label>
              <input className="checkbox" type="checkbox" name="wifiGratis" value={comodidades.wifiGratis} checked={comodidades.wifiGratis} onChange={(e) => handleComodidades(e)}/>
              <span>Wi-fi grátis</span>
            </label>
          </p>
          <p>
            <label>
              <input className="checkbox" type="checkbox" name="showsMusicais" value={comodidades.showsMusicais} checked={comodidades.showsMusicais} onChange={(e) => handleComodidades(e)}/>
              <span>Shows Musicais</span>
            </label>
          </p>
          <a href="#" className="left hospedes-bottom" name="deleteConveniences" onClick={(e) => handleComodidades(e)}>Limpar</a>
          <a href="#" className="right hospedes-bottom apply" onClick={(e) => apply(e)}>Aplicar</a>
        </form>
      </div>
    </div>
  );

}

export default ModalComodidade;