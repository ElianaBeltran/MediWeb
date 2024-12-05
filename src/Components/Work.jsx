import React from "react";
import CreateProfile from "../Assets/create-profile-image.png";
import Choose from "../Assets/choose-image.png";
import Certified from "../Assets/certified-image.png";
import Diagnostic from "../Assets/diagnostic-image.png"
import Privacy from "../Assets/privacy-image.png"


const Work = () => {
  const workInfoData = [
    {
      image: CreateProfile,
      title: "Regístrate y crea tu perfil",
      text: "Inicia sesión en Mediweb y configura tu cuenta. Toda tu información personal y médica está protegida mediante cifrado de extremo a extremo.",
    },
    {
      image: Choose,
      title: "Elige un servicio",
      text: "Consulta a un médico general, agenda una cita con un especialista o accede a tu historial clínico desde cualquier dispositivo.",
    },
    {
      image: Certified,
      title: "Conéctate con médicos certificados",
      text: "Todos nuestros profesionales están verificados y cuentan con las credenciales necesarias para garantizar atención de calidad. Puedes hablar con ellos por videochat o mensajes en tiempo real.",
    },
    {
      image: Diagnostic,
      title: "Recibe recetas y diagnósticos al instante",
      text: "Tras tu consulta, obtén recetas digitales y recomendaciones que puedes gestionar directamente en la plataforma.",
    },
    {
      image: Privacy,
      title: "Confianza y privacidad",
      text: "La seguridad de tus datos médicos es nuestra prioridad. Mediweb cumple con las normativas internacionales de privacidad (como HIPAA), asegurando que toda tu información permanezca confidencial.",
    }
  ];
  return (
    <div id="#work"className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Funcionamiento</p>
        <h1 className="primary-heading">Cómo Funciona</h1>
        <p className="primary-text">
        En Mediweb, combinamos tecnología avanzada con protocolos médicos rigurosos para brindarte una experiencia segura y confiable. Así es como lo hacemos:
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;