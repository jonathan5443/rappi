import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className="container">
        <div className="row">
          <div className="logo col-7">
            <div className="row">
              <div className="col-12">
                <h1>Ammet color</h1>
                <span>lorem ipsum</span>
              </div>
            </div>
          </div>
          <div className="social col-5">
            <div className="row networks">
              <span>text</span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
