import React, { Component } from 'react'
import "./TourList.scss";
import Tour from '../Tour/Tour';
import { tourData } from "../tourData";

class TourList extends Component {
  state = {
    tours: tourData
  }


  removeTour = id => {
    const {tours} = this.state;
    const filteredTours = tours.filter(tour => tour.id !== id)

    this.setState({
      tours: filteredTours
    })
  // console.log("clicked");
  }


  render() {
    // console.log(this.state.tours);
    const {tours} = this.state;

    return (
      <section className="tour-list">
      {
      tours.map(tour => {
        return (
          <Tour
          key={tour.id}
          tour={tour}
          removeTour={this.removeTour}
          />
        )
      })
      }
     </section>
    )
  }
}

export default TourList;