import React, { Component } from 'react';
import '../FilterHeader.css'

class FilterHeader extends Component {
  render() {
    return (
      <div>
        <div className="nav-content filterHeader z-depth-2">
          <div className="container">
            <a className="waves-effect waves-light btn-small btn btn-filter">Datas</a>
            <a className="waves-effect waves-light btn-small btn btn-filter">Hóspedes</a>
            <a className="waves-effect waves-light btn-small btn btn-filter">Comodidades</a>
            <a className="waves-effect waves-light btn-small btn btn-filter">Preço</a>
            <a className="waves-effect waves-light btn-small btn btn-filter">Ratings</a>
          </div>  
        </div>
      </div>
    );
  }
}

export default FilterHeader;
