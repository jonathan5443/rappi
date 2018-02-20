import React, { Component } from "react";
import ImageGallery from "react-image-gallery";

class Gallery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
  }

  componentWillMount() {
    this.imageFormatter()
  }

  imageFormatter() {
    let imagesFormatted = []
    this.props.images.forEach(image => {
      imagesFormatted.push({
        original: this.props.endpoint + image._links.image["href"], thumbnail: this.props.endpoint + image._links.image["href"]
      })
    });
    this.setState({
      images: imagesFormatted
    })
  }

  render() {
    return <ImageGallery items={this.state.images} />;
  }
}

export default Gallery;
