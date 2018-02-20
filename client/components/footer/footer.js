import React, { Component } from "react";
class Footer extends Component {
  render() {

    return (
      <footer>
        <div className="container">
          <div className="col-4">
            <h3>ATENCIÓN AL USUARIO</h3>

          </div>

          <div className="col-4">
            <h3>HORARIO DE ATENCIÓN</h3>
          </div>

          <div className="col-4">
            <h3>DIRECCIÓN</h3>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
