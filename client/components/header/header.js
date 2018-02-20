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
              <div className="col-2">
                <img className="escudo" src={require("../../images/escudo.png")} />
              </div>
              <div className="col-10">
                <h1>Alcaldia Municipal</h1>
                <span>Tocaima</span>
              </div>
            </div>
          </div>
          <div className="social col-4">
            <div className="row networks">
              <div className="col-6">
                <img className="youtube" src={require("../../images/youtube.png")} />
              </div>
              <div className="col-6">
                <img className="instagram" src={require("../../images/instagram.png")} />
              </div>
              <div className="col-6">
                <img className="facebook" src={require("../../images/facebook.png")} />
              </div>
              <div className="col-6">
                <img className="twitter" src={require("../../images/twitter.png")} />
              </div>
            </div>
            <img className="city_photo" src={require("../../images/tocaima.png")} />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
