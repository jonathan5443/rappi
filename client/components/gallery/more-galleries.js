import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";

class MoreGalleries extends Component {
  render() {
    return (
      <OwlCarousel
        className="owl-theme"
        loop
        dots={false}
        items={4}
        margin={10}
      >
        <a href="#" className="item">
          <img clasname="photo" src={require("../../images/photo1.jpg")}/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </a>
        <a href="#" className="item">
          <img clasname="photo" src={require("../../images/photo2.jpg")}/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </a>
        <a href="#" className="item">
          <img clasname="photo" src={require("../../images/photo1.jpg")}/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </a>
        <a href="#" className="item">
          <img clasname="photo" src={require("../../images/photo2.jpg")}/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </a>
      </OwlCarousel>
    );
  }
}

export default MoreGalleries;
