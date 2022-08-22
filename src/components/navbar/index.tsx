import React, { Component } from "react";
import { IonIcon } from "react-ion-icon";
import '../../assets/fonts/fonts.scss';
import './styles.css';
import '../../App.css'
import logo from '../../assets/images/logo.png'


class Navbar extends Component {
      render() {
      return (     
        <>
        <header>
            <img className="logo" src={logo} alt="logo"/>
            <a className="cta" target="_black" href="https://www.linkedin.com/in/grjuanm/">Linkedin<IonIcon name="logo-linkedin"></IonIcon></a>
            <a className="menu cta" target="_black" href="https://www.linkedin.com/in/grjuanm/">Linkedin<IonIcon name="logo-linkedin"></IonIcon></a>
        </header>
        <div className="overlay">
            <a href="/#" className="close">&times;</a>
            <div className="overlay__content">
            </div>
        </div>
        </>
      );
    }
  }
  
  export default Navbar;