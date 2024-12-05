import React from "react";
import "../Styles/Home.css"
import Navbar from "./Navbar"
import BannerBackground from "../Assets/home-banner-background.png"
import BannerImage from "../Assets/home-banner-image.png";
import{FiArrowRight} from "react-icons/fi";
import About from "./About";
import Work from "./Work";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
    return (
        <>
        <div className="home-container">
            <Navbar/>
            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                    <img src={BannerBackground} alt=""/>
                </div>
                <div className="home-text-section">
                    <h1 className="primary-heading">
                    Salud conectada, vida mejorada
                    </h1>
                    <p className="primary-text">
                    Integramos tecnología avanzada y atención médica personalizada para transformar la 
                    manera en que cuidas tu salud. Porque sentirte bien nunca debería ser complicado
                    </p>
                    <a href="/userHome" className="secondary-button">
                        Ir a su cita <FiArrowRight/>
                    </a>
                </div>
                <div className="home-image-container">
                    <img src={BannerImage} alt="Banner"/>
                </div>
            </div>
        </div>
        <About/>
        <Work/>
        <Testimonials/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default Home