import React from "react";

const Contact = () => {
  return (
    <div id = "contact" className="contact-page-wrapper">
      <h1 className="primary-heading">¿Alguna pregunta en mente?</h1>
      <h1 className="primary-heading">Dejanos saber</h1>
      <div className="contact-form-container">
        <input type="email" placeholder="correo@email.com" />
      </div>
      <div className="contact-form-container">
      <input type="text" placeholder="Pregunta" />
      <button className="secondary-button">Enviar</button>
      </div>
    </div>
  );
};

export default Contact;