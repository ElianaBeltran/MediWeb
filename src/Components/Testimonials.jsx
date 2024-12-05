import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div id="testi" className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonio</p>
        <h1 className="primary-heading">Nuestros usuarios</h1>
        <p className="primary-text">
        En Mediweb, nos enorgullecemos de marcar la diferencia en la vida de nuestros usuarios. 
        Cada consulta, cada diagnóstico y cada interacción están diseñados para ofrecer la mejor 
        experiencia en atención médica virtual.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        Nunca imaginé que cuidar de mi salud podría ser tan sencillo. Con Mediweb, programar una 
        consulta médica, hablar con un especialista o incluso recibir una receta digital es cuestión de minutos, 
        sin importar dónde esté.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Carlos Cruz</h2>
      </div>
    </div>
  );
};

export default Testimonial;