import React, { Component } from "react";
import "../../assets/fonts/fonts.scss";
import "./styles.css";
import img from "../../assets/images/foto-1.png";
import "transition-style";


class Banner extends Component {
  render() {
    return (
      <>
        <section className="banner">
        <div transition-style="in:wipe:up" className="img">
                <img src={img} alt="img" />
              </div>
          <div className="content">
            <section>
              <div  className="name">
                <h1 className="title">
                  Hey There, <br /> I'm Juan{" "}
                </h1>
              </div>
              <div className="2">
                <h4 className="sub-title">
                  I am a web-oriented software
                  <br /> developer.
                </h4>
              </div>
            </section>
            <section>
              <div className="1">
                <h4 className="sub-title email">contacto@juanfrontend.tech</h4>
              </div>
            </section>
            <section>
              <div className="honors">
                <h2 className="number">2</h2>
                <h2>
                  Two
                  <br /> Honors
                </h2>
              </div>
              <div className="honors-images">
                <img
                  src="https://misiontic2022.mintic.gov.co/mt2022/assets/assets/images/logo-mision.png"
                  alt="logo"
                />
                <p>Featured Companion</p>
                <p>competition Interacpedia</p>
              </div>
              
            </section>
            
          </div>
          
        </section>
      </>
    );
  }
}

export default Banner;
