import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";

class Slider extends Component {
  render() {
    return (
      <OwlCarousel
        className="owl-theme slider"
        loop
        dots={false}
        items={1}
        autoplay={true}
        autoplayTimeout={4000}
        margin={10}
        nav
      >
        <div className="item">
          <div className="row">
            <div className="col-9">
              <img clasname="people" src={require("../../images/people3.jpg")}/>
            </div>
            <div className="col-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. . 
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="row">
            <div className="col-9">
              <img clasname="people" src={require("../../images/people2.jpg")}/>
            </div>
            <div className="col-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. . 
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="row">
            <div className="col-9">
              <img clasname="people" src={require("../../images/people.jpg")}/>
            </div>
            <div className="col-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. . 
              </p>
            </div>
          </div>
        </div>
      </OwlCarousel>
    );
  }
}

export default Slider;
