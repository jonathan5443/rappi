import React, { Component } from "react";
import ImageCarousel from "../../components/image-carousel/image-carousel";
import Slider from "../../components/slider/slider";

class Home extends Component {
  render() {
    return (
      <div className="col-12">
        <Slider />
        <ImageCarousel />
      </div>
    );
  }
}

export default Home;
