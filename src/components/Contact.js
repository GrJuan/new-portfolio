import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import emailjs from '@emailjs/browser';


export const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {

    setButtonText('Message Sent');
    e.preventDefault();

    emailjs.sendForm('service_8lsc21g', 'template_qw7849v', form.current, 'Jg00rzubRupuQkk2j')
      .then((result) => {
        setStatus({ success: true, message: "Thanks for contacting me, I will get back to you soon."});
      }, (error) => {
        setStatus({ success: false, message: "Something went wrong, please try again later." });
      });
  };
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={12} className="px-1">
                    <input type="text" name="from_name" required placeholder="Your Name" />
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                      <input type="email" name="email" required placeholder="Email Address" />
                    </Col>
                    
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="message" required placeholder="Message"></textarea>
                      {
                      status.message &&
                      <Col size={12} sm={12} className="px-1">
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
