import React, { Component } from "react";
import { IonIcon } from "react-ion-icon";
import '../../assets/fonts/fonts.scss';
import './styles.css';
import '../../App.css'
// const doc = document;
// const menuOpen = doc.querySelector(".menu");
// const menuClose = doc.querySelector(".close");
// const overlay = doc.querySelector(".overlay");

// menuOpen?.addEventListener("click", () => {
//   overlay?.classList.add("overlay--active");
// });

// menuClose?.addEventListener("click", () => {
//   overlay?.classList.remove("overlay--active");
// });


class Navbar extends Component {
      render() {
      return (     
        <>
        <header>
        {/* <img src="images/logo.svg" alt="logo"/> */}
            <a className="logo" href="/#">Juan</a>

            <a className="cta" target="_black" href="https://www.linkedin.com/in/grjuanm/">Linkedin<IonIcon name="logo-linkedin"></IonIcon></a>
            <a className="menu cta" target="_black" href="https://www.linkedin.com/in/grjuanm/">Linkedin<IonIcon name="logo-linkedin"></IonIcon></a>
        </header>
        <div className="overlay">
            <a href="/#" className="close">&times;</a>
            <div className="overlay__content">
                <a href="/#">About</a>
                <a href="/#">Projects</a>
                <a href="/#">About</a>
            </div>
        </div>
        </>
      );
    }
  }
  
  export default Navbar;