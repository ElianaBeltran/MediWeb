import React from "react";
import AboutBackground from "../Assets/about-background.png"
import AboutBackgroundImage from "../Assets/about-background-image.png"
import { BsFillPlayCircleFill } from "react-icons/bs";

function About(){
    return(
        <div id="about" className="about-section-container">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt=""/>
            </div>
            <div className="about-section-image-container">
                <img src={AboutBackgroundImage} alt=""/>
            </div>
            <div className="about-section-text-container">
                <p className="primary-subheading">
                    Sobre nosotros
                </p>
                <h1 className="primary-heading">
                Tu bienestar, nuestra misión
                </h1>
                <p className="primary-text">
                En Mediweb, transformamos la manera en que accedes a la atención médica. Creemos que la salud no 
                debe tener barreras, por eso desarrollamos una plataforma que conecta pacientes con médicos 
                certificados de forma rápida, segura y confiable, desde cualquier lugar y en cualquier momento. 
                </p>
                <p className="primary-text">
                Nuestra misión es simplificar tu experiencia de cuidado médico, ofreciéndote herramientas avanzadas para 
                realizar consultas en línea, agendar citas, gestionar tu historial clínico y recibir recetas 
                digitales de manera fácil y accesible. 
                </p>
                <p className="primary-text">
                Con un enfoque en la innovación tecnológica y la calidez humana, nos comprometemos a ser tu aliado en el 
                camino hacia un bienestar integral. Ya sea que necesites un chequeo regular, resolver dudas con un 
                especialista o atención inmediata, estamos aquí para ti.
                </p>
                <div className="about-buttons-container">
                    <button className="secondary-button">Aprender más</button>
                    <button className="watch-video-button"><BsFillPlayCircleFill/> Ver video</button>
                </div>
            </div>
        </div>
    )
}
export default About