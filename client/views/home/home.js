import React, { Component } from "react";

import ProductList from "../../components/product/product-list";
import Filter from "../../components/filter/filter";
import Sort from "../../components/sort/sort";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions/shopping-cart";

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: this.props.store.products
    }
    this.updateProductList = this.updateProductList.bind(this);
  }

  updateProductList(newProducts = this.props.store.products){
    this.setState({
      products: newProducts
    })
  }
  
  render() {
    return (
      <div>
        <Filter products={this.state.products} updateProductList={this.updateProductList} />
        <ProductList products={this.state.products} />
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

