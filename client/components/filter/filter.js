import React, { Component } from "react";
class Filter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isFilterByAvailibility: false,
      isFilterByPriceMin: 0,
      isFilterByPriceMax: 9999
    }
    this.filterByAvailability = this.filterByAvailability.bind(this);
    this.filterByPrice = this.filterByPrice.bind(this);
  }

  filterByAvailability() {
    this.setState({
      isFilterByAvailibility: !this.state.isFilterByAvailibility
    }, () => {
      if (this.state.isFilterByAvailibility) {
        const filter = this.props.products.filter((product) => {
          return product.available === true;
        })
        this.props.updateProductList(filter);
      } else {
        this.props.updateProductList();
      }
    })
  }

  filterByPrice() {
    console.log("asd")
    const filter = this.props.products.filter((product) => {
      const productPrice = Number(product.price.replace(/[^0-9\.-]+/g, "")) / 1000
      return (productPrice > this.state.isFilterByPriceMin) && (productPrice < this.state.isFilterByPriceMax);
    })
    this.props.updateProductList(filter);
  }

  render() {
    return (
      <div className="col-2 filter">
        <p>
          Filter By
        </p>
        <input
          name="availibility"
          type="checkbox"
          checked={this.state.isFilterByAvailibility}
          onChange={this.filterByAvailability} />
        Disponibilidad
        <hr />
        Precio
        <input name="priceMin" type="text" placeholder="min" onChange={(event) => {
          this.setState({
            isFilterByPriceMin: event.target.value
          }, () => { this.filterByPrice() })
        }} />
        <input name="priceMax" type="text" placeholder="max" onChange={(event) => {
          this.setState({
            isFilterByPriceMax: event.target.value
          }, () => { this.filterByPrice() })
        }} />
      </div>
    );
  }
}

export default Filter;
