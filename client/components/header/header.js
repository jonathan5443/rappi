import React, { Component } from "react";
import ShoppingCart from "../shopping-cart/shopping-cart"

import { connect } from "react-redux";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShoppingCartVisible: false
    }
    this.showShoppingCart = this.showShoppingCart.bind(this);
  }

  showShoppingCart(){
    this.setState({
      isShoppingCartVisible: !this.state.isShoppingCartVisible
    })
  }

  render() {
    return (
      <header >
        <div className="container">
          <div className="row">
            <div className="col-10 logo-container">
              <h1>El Baratón</h1>
            </div>
            <div className="col-2 shopping-cart-container">
              <a href="#" onClick={this.showShoppingCart}>
                <p>Carrito - {this.props.shoppingCart.total.toFixed(2)}</p>
              </a>
              {this.state.isShoppingCartVisible &&
                <ShoppingCart onClose={this.showShoppingCart} />
              }
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
