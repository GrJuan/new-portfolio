import React, { Component } from "react";
import "../../assets/fonts/fonts.scss";
import "./styles.css";
import "../../App.css";
import { IonIcon } from "react-ion-icon";


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

class Tecnology extends Component {
  render() {
    return (
      <>
        <section className="content-tecnology">
          <div className="first-seccion">
            <div className="content-react">
              <IonIcon name="logo-react"></IonIcon>
              <h1 data-aos="fade-right" className="title-tecnology">React JS</h1>
            </div>
            <div className="content-node">
              <IonIcon name="logo-nodejs"></IonIcon>
              <h1 data-aos="fade-right" className="title-tecnology">Node JS</h1>
            </div>
            <div className="content-js">
              <IonIcon name="logo-javascript"></IonIcon>
              <h1 data-aos="fade-right" className="title-tecnology">JavaScript</h1>
            </div>
          </div>
          <div className="second-section">
            <h1 className="title-about-tecnology">What do l help?</h1>
            <h1 data-aos="zoom-in" className="subtitle-about-tecnology">
            I am a web-oriented software developer, <br/>
            I have knowledge in Javascript and Python languages, <br/>
            using different frameworks such as React JS, Express and NodeJs.
            </h1>
          </div>
        </section>
      </>
    );
  }
}

export default Tecnology;
