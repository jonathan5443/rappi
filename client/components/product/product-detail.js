
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions/shopping-cart";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    this.props.actions.increase_quantity_from_cart(this.props.product);
  }

  render() {
    return (
      <div className="row product-detail col-3">
        <img src={require(`../../images/beans.png`)} alt={this.props.product.name} />
        <p className="name">{this.props.product.name}</p>
        <p className="name">{this.props.product.price}</p>
        <button className="button" onClick={this.addToCart}>ADD</button>
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
    store: state.store
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);