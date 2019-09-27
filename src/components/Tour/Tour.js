import React, { Component } from 'react';
import "./Tour.scss";


class Tour extends Component {

  state = {
    isVisible: false
  }


  showInfo = (e) => {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }



  render() {
    const {id, city, img, name, info} = this.props.tour;
    const {isVisible} = this.state;
    const {removeTour} = this.props;

    return (
      <article className="tour">
          <div className="img-container">
              <img src={img} alt="cityscape"/>
              <span onClick={() => {
        removeTour(id)
      }} className="close-btn"><i className="fas fa-window-close"></i></span>
          </div>

          <div className="tour-info">
                <h2>{city}</h2>
                <h3>{name}</h3>
                <h4>info <span  onClick={this.showInfo}><i className="fas fa-caret-square-down"></i></span></h4>

                {
      isVisible && <p>{info}</p>
      }
               
          </div>
      </article>
    )
  }
}

export default Tour;