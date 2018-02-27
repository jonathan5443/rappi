import React, { Component } from "react";

import ProductList from "../../components/product/product-list";
import Filter from "../../components/filter/filter";
import Sort from "../../components/sort/sort";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions/shopping-cart";

class Home extends Component {
  render() {
    return (
      <div>
        <Filter products={this.props.store.products} />
        <ProductList products={this.props.store.products} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);

