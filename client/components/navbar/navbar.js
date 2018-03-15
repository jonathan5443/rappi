
import React, { Component } from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions/store";
import NavBarItem from "./navbar-item.js"
class NavBar extends Component {

  constructor(props) {
    super(props);
    this.createMenu = this.createMenu.bind(this);
  }

  selectCategory(categoryId) {
    console.log(categoryId)
  }

  createMenu() {
    let nodes = this.props.store.categories.map((item) => {
      return (
        <NavBarItem node={item} onSelectCategory={this.selectCategory} children={item.sublevels} />
      );
    });
    return nodes;
  }

  render() {
    return (
      <nav>
        <div className="container">
          <div className="row">
            <div className="TabBar col-12">
              {
                this.props.store.categories.length > 0 ? (
                  <ul> {this.createMenu()} </ul>
                ) : (
                    <p>No hay categorias</p>
                  )
              }
            </div>
          </div>
        </div>
      </nav>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);