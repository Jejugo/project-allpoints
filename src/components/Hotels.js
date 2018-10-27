import React, { Component } from 'react';
import '../css/Hotels.css'

class Hotels extends Component {

  render() {
    const { filteredHotels, hotels, hospedes } = this.props;
    let hotelList
    if(filteredHotels === null || (hospedes.adultos + hospedes.criancas) === 0){
      console.log("entrou!");
      hotelList = hotels.map(item => {
          return hotelList = item.availableRooms.map(room => {
            return (
              <li key={room.id}>
                <div className="hotel">
                  <div className="hotel-top">
                  {room.url !== undefined && (
                      <div className="hotel-cover" style={{ width: 128, height: 193, backgroundImage: `url(${room.url})` }}></div>
                  )}
                  </div>
                  <div className="hotel-title">{room.name}</div>
                  <div>{room.price}</div>
                </div>
              </li>
            )
          });
      })
      console.log(hotelList);
    }
    else{
      hotelList = filteredHotels.map(room => {
        console.log("room2");
        return (
          <li key={room.id}>
            <div className="hotel">
              <div className="hotel-top">
              {room.url !== undefined && (
                  <div className="hotel-cover" style={{ width: 128, height: 193, backgroundImage: `url(${room.url})` }}></div>
              )}
              </div>
              <div className="hotel-title">{room.name}</div>
              <div>{room.price}</div>
            </div>
          </li>
        )
      });
    }
    

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
