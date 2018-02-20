
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
                <li className={item["id-node"] == this.props.currentPage ? "active" : ""} key={item["id-node"]} onClick={()=> this.props.changePage(item["id-node"])}><span>{item.name}</span></li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;