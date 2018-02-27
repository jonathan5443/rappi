
import React, { Component } from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions/store";

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.createMenu = this.createMenu.bind(this);
  }

  createMenu(menu = this.props.store.categories) {
    let formattedMenu = `<ul>`;
    for (let i = 0; i < menu.length; i++) {
      formattedMenu = `${formattedMenu}<li>${menu[i].name}`
      if (menu[i].sublevels) {
        this.createMenu(menu[i].sublevels);
      }
      formattedMenu = `${formattedMenu}</li>`;
    }
    formattedMenu = `${formattedMenu}</ul>`;
    return formattedMenu;
  }

  render() {
    return (
      <nav>
        <div className="container">
          <div className="row">
            <div className="TabBar col-12">
              {
                this.props.store.categories.length > 0 ? (
                  <div dangerouslySetInnerHTML={{ __html: this.createMenu() }} />
                ) : (
                    <li className={""}>No hay categorias</li>
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