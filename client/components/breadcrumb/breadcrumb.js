
import React, { Component } from 'react';

class Breadcrumb extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="breadcrumb-container">
        <div className="row">
          <div className="breadcrumb col-12">
            <ul>
              {Object.keys(this.props.data).length > 0 && this.props.data._embedded["breadcrumbs-nodes"].slice(0).reverse().map((breadcrumb, index) =>
                <li key={breadcrumb._links.self["name"]} onClick={() => this.props.changePage(breadcrumb._links.self["name"])} >
                  <span>{breadcrumb._links.self["title"]}</span>
                  {index + 1 !== this.props.data._embedded["breadcrumbs-nodes"].length &&
                    <span className="separator"> >> </span>
                  }
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Breadcrumb;