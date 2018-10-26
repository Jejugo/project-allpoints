import React, { Component } from 'react';
import '../Hotels.css'

class Hotels extends Component {
  render() {
    const { logo, hotels } = this.props;

    const hotelList = hotels.map(hotel => {
      return (
        <li key={hotel.id}>
					<div className="hotel">
						<div className="hotel-top">
						{/*hotel.imageLinks !== undefined && (
								<div className="hotel-cover" style={{ width: 128, height: 193, backgroundImage: `url(${hotel.imageLinks.thumbnail})` }}></div>
            )*/}
						</div>
						<div className="hotel-title">{hotel.name}</div>
					</div>
				</li>
      )
    });

    return (
      <div className="container hotel-set">
					<ol className="hotel-grid">
						{hotelList}
					</ol>
			</div>
    );
  }
}

export default Hotels;
