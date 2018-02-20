
import React, { Component } from 'react';

class NavBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="container">
        <div className="row">
          <div className="TabBar col-12">
            <ul>
              {Object.keys(this.props.data).length > 0 && this.props.data._embedded["main-menu-nodes"].map((item) =>
                <li className={""}>{item.name}</li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;