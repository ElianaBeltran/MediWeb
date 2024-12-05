import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Calidad</span>
          <span>Ayuda</span>
          <span>Empleos</span>
          <span>Testimonios</span>
  
        </div>
        <div className="footer-section-columns">
          <span>809-500-8000</span>
          <span>soporte@mediweb.com</span>
          <span>prensa@mediweb.com</span>
          <span>contacto@mediweb.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Términos & Condiciones</span>
          <span>Política de privacidad</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;