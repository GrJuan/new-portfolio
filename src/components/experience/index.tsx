import React, { Component } from "react";
import "../../assets/fonts/fonts.scss";
import "./styles.css";
import "transition-style";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

class Experience extends Component {
  render() {
    return (
      <>
        <div className="content-experience">
          <h1 transition-style="in:circle:bottom-right" className="title-experience">My Work Experience</h1>
        </div>
        <div className="timeline">
          <div className="entry">
            <div data-aos="fade-right" className="title-card item-1">
              <h3>2022 - Present</h3>
              <p>Solucionsoft s.a.s</p>
            </div>
            <div data-aos="fade-left" className="body">
              <p>Frontend Developer JR</p>
              <ul>
                <li>Website layout</li>
                <li>API development for projects</li>
                <li>Back-end development Node Js - TypeORM</li>
                <li>Front-end development</li>
              </ul>
            </div>
          </div>
          <div className="entry">
            <div data-aos="fade-right" className="title-card item-2">
              <h3>2021 - Freelancer</h3>
              <p></p>
            </div>
            <div data-aos="fade-left" className="body">
              <p>Web page development</p>
              <ul>
                <li>Development of multiple web pages</li>
              </ul>
            </div>
            <div className="entry">
              <div data-aos="fade-right" className="title-card item-2">
                <h3>2020 - Projects</h3>
                <p></p>
              </div>
              <div data-aos="fade-left" className="body">
                <p>Projects developed in my educational stage</p>
                <ul>
                  <li>Website layout</li>
                  <li>Front-end development</li>
                  <li>You practice with css, html and javascript</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Experience;
