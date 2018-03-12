import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions/shopping-cart";


class ShoppingCart extends Component {

  constructor(props) {
    super(props);
    this.checkout = this.checkout.bind(this);
  }

  checkout(){
    this.props.actions.empty_cart();
    alert("gracias por comprar en el baraton");
  }

  render() {
    return (
      < div className="shopping-cart" >
        <h2>Tu carrito</h2>
        <button onClick={this.props.onClose}>Cerrar</button>
        {
          Object.keys(this.props.shoppingCart.products).length > 0 ? (
            <div>
              {
                Object.keys(this.props.shoppingCart.products).map((key) =>
                  <p key={key}>{this.props.shoppingCart.products[key].name} - {this.props.shoppingCart.products[key].quantity}</p>
                )
              }
              <button onClick={this.checkout}>Checkout</button>
            </div>
          ) : (
              <p>No hay products</p>
            )
        }
      </div >
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

function mapStateToProps(state) {
  return {
    shoppingCart: state.shoppingCart
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);