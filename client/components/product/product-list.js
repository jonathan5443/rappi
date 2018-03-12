import React, { Component } from "react";
import ProductDetail from "./product-detail.js";

class ProductsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-10 product-list-container">
        {
          this.props.products.length > 0 ? (
            this.props.products.map((product) =>
              <ProductDetail key={product.id} product={product} />
            )
          ) : (
              <p>No hay productos</p>
            )
        }
      </div>

    )
  }
}

export default ProductsList;