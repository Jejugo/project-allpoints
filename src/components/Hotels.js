import React, { Component } from 'react';
import '../css/Hotels.css'

class Hotels extends Component {

  render() {
    const { filteredHotels, hotels, hospedes } = this.props;
    let hotelList
    if(filteredHotels === null){
      hotelList = hotels.map(item => {
          return hotelList = item.availableRooms.map(room => {
            return (
              <li key={room.id}>
                <div className="hotel">
                  <div className="hotel-top">
                    <div className="hotel-cover" style={{ width: 128, height: 193, border: `1px solid black`, backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOjfzkmUro8gHmMgl_8fWKH2DBLBx63jg-bp9YV_RvT4jgI1lIYA` }}></div>
                  </div>
                  <div className="hotel-title center">{item.name}</div>
                  <div className="center">Preço: {room.price}</div>
                </div>
              </li>
            )
          });
      })
    }
    else{
      hotelList = filteredHotels.map(room => {
        return (
          <li key={room.id}>
            <div className="hotel">
              <div className="hotel-top">
                <div className="hotel-cover" style={{ width: 128, height: 193, border: `1px solid black`, backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOjfzkmUro8gHmMgl_8fWKH2DBLBx63jg-bp9YV_RvT4jgI1lIYA` }}></div>
              </div>
              <div className="hotel-title center">{room.name}</div>
              <div className="center">Preço: {room.price}</div>
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
