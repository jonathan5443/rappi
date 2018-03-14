import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions/shopping-cart";


class ShoppingCart extends Component {

  constructor(props) {
    super(props);
    this.checkout = this.checkout.bind(this);
  }

  checkout() {
    this.props.actions.empty_cart();
    alert("gracias por comprar en el baraton");
  }

  render() {
    return (
      <div>
        <div className="shopping-cart-overlay" onClick={this.props.onClose}></div>
        <div className="shopping-cart" >
          <h2>
            Tu carrito
            <button onClick={this.props.onClose}>Cerrar</button>
          </h2>
          {
            Object.keys(this.props.shoppingCart.products).length > 0 ? (
              <div>
                {
                  Object.keys(this.props.shoppingCart.products).map((key) =>
                    <div className="row product-detail col-12">
                      <div className="col-4">
                        <img src={require(`../../images/${this.props.shoppingCart.products[key].image}`)} alt={this.props.shoppingCart.products[key].name} />
                      </div>
                      <div className="name col-5">
                        <p >{ this.props.shoppingCart.products[key].name }</p>
                      </div>
                      <div className="price col-3">
                        <p >{ this.props.shoppingCart.products[key].price } X { this.props.shoppingCart.products[key].quantity }</p>
                      </div>
                    </div>
                  )
                }
                <p className="total">Total - {this.props.shoppingCart.total.toFixed(2)}</p>
                <button className="checkout" onClick={this.checkout}>Checkout</button>
              </div>
            ) : (
              <div className="empty-cart">
                 <p>No hay products</p>
              </div>
              )
          }
        </div >
      </div>
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