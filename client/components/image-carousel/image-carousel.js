import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";

class ImageCarousel extends Component {
  render() {
    return (
      <OwlCarousel className="owl-theme imageCarousel" loop dots={false} items={5} margin={10} nav>
        <div className="item">
          <img clasname="pueblo" src={require("../../images/pueblo2.jpg")}/>
        </div>
        <div className="item">
          <img clasname="pueblo" src={require("../../images/pueblo.jpg")}/>
        </div>
        <div className="item">
          <img clasname="pueblo" src={require("../../images/pueblo3.jpg")}/>
        </div>
        <div className="item">
          <img clasname="pueblo" src={require("../../images/pueblo4.jpg")}/>
        </div>
        <div className="item">
          <img clasname="pueblo" src={require("../../images/pueblo5.jpg")}/>
        </div>
        <div className="item">
          <img clasname="pueblo" src={require("../../images/pueblo6.jpg")}/>
        </div>
        <div className="item">
          <img clasname="pueblo" src={require("../../images/pueblo4.jpg")}/>
        </div>
        <div className="item">
           <img clasname="pueblo" src={require("../../images/pueblo8.jpg")}/>
        </div>
      </OwlCarousel>
    );
  }
}

export default ImageCarousel;
