import React, { Component } from "react";
import ShoppingCart from "../shopping-cart/shopping-cart"

import { connect } from "react-redux";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props)
    return (
      <header >
        <div className="container">
          <div className="row">
            <div className="col-10">
              <h1>El Baratón</h1>
            </div>
            <div className="col-2">
              <p>Carrito - {this.props.shoppingCart.total}</p>
              <ShoppingCart />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    shoppingCart: state.shoppingCart
  };
}

export default connect(mapStateToProps)(Header);
