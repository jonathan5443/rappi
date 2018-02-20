import React, { Component } from "react";
class Footer extends Component {
  render() {

    return (
      <footer>
        {Object.keys(this.props.data).length > 0 &&
          <div className="container">
            <div className="col-3">
              <h3>ATENCIÓN AL USUARIO</h3>
              <div className="phone">
                <div className="col-2">
                  <img className="image_footer" src={require("../../images/phone.png")} />
                </div>
                <div className="col-10">
                  <p>{this.props.data["config-vars"]._TELEFONOS}</p>
                  <span>DIRECTORIO DE CONTACTOS ></span>
                </div>
              </div>

              <div className="second_row">
                <div className="col-2">
                  <img className="image_footer" src={require("../../images/mail.png")} />
                </div>
                <div className="col-10">
                  <span> </span>
                  <p>{this.props.data["config-vars"]._EMAIL}</p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <h3>HORARIO DE ATENCIÓN</h3>
              <div className="Clock">
                <div className="col-2">
                  <img className="image_footer" src={require("../../images/clock.png")} />
                </div>
                <div className="col-10">
                  <p>LUNES A VIERNES</p>
                  <p>{this.props.data["config-vars"]._HORARIO_ATENCION}</p>
                </div>
              </div>

              <div className="second_row">
                <div className="col-2">
                  <img className="image_footer" src={require("../../images/calendar.png")} />
                </div>
                <div className="col-10">
                  <span>ÚLTIMA ACTUALIZACIÓN</span>
                  <p>NOVIEMBRE 1 de 2017</p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <h3>DIRECCIÓN</h3>
              <div className="location">
                <div className="col-2">
                  <img className="image_footer" src={require("../../images/location_icon.png")} />
                </div>
                <div className="col-10">
                  <p>{this.props.data["config-vars"]._DIRECCION}</p>
                  <p>PBX: {this.props.data["config-vars"]._TELEFONOS}</p>
                </div>
              </div>
              <div className="second_row">
                <div className="col-2">
                  <img className="image_footer" src={require("../../images/person.png")} />
                </div>
                <div className="col-10">
                  <span>NO. DE VISITAS</span>
                  <p>11.793.892</p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <img className="map" src={require("../../images/mapa.png")} />
            </div>
          </div>
        }
      </footer>
    );
  }
}

export default Footer;
