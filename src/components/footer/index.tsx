import React, { Component } from "react";
import "../../assets/fonts/fonts.scss";
import "./styles.css";
import "../../App.css";

class Footer extends Component {
  render() {
    return (
      <>
        <div className="container-footer">
            <div ata-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0" 
                className="footer-email">
                <h1 className="title-footer">Contact Me</h1>
                <h1  className="title-email">contacto@juanfrontend.tech</h1>
            </div>
        </div>
      </>
    );
  }
}

export default Footer;
