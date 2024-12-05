import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import BannerBackground from "../Assets/home-banner-background.png";

function Register() {
        const [values, setValues] = useState({
            name: '',
            email: '',
            password: ''
        })
        const navigate = useNavigate()
        const handleSubmit = (event) => {
            event.preventDefault();
            axios.post('https://api.belivgames.com/dirx/register', values)
            .then(res => {
                if(res.data.Status === "Success") {
                    navigate('/login')
                } else{
                    alert("Error signing up")
                }
            })
            .then(err => console.log(err));
        }
    return(
        <>
        <div className="home-container">
            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                    <img src={BannerBackground} alt=""/>
                </div>
                
            </div>
            </div>
        <div className='box-info'>
            <div className='box-info-container'>
                <h2 className="primary-text">Crear Cuenta</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="secondary-text"><strong>Nombre</strong></label>
                        <input type="text" placeholder="Ingrese su nombre" name="name" onChange={e => setValues({...values, name: e.target.value})} className="custom-input"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="secondary-text"><strong>Correo Electrónico</strong></label>
                        <input type="email" placeholder="Ingrese su correo electrónico" name="email" onChange={e => setValues({...values, email: e.target.value})} className="custom-input"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="secondary-text"><strong>Contraseña</strong></label>
                        <input type="password" placeholder="Ingrese su contraseña" name="password" onChange={e => setValues({...values, password: e.target.value})} className="custom-input"/>
                    </div>

                    <div>
                        <button type="submit" className="login-button">Crear Cuenta</button>
                        <p className="secondary-text">
                            Acepta los términos y políticas de uso.
                        </p>
                        <Link to="/login" className="create-account-button">Iniciar sesión</Link>
                    </div>
                    <div className="back-home-container">
                    <Link to="/" className="back-home-button">Volver a Inicio</Link>
                    </div>
                  
                </form>
            </div>
        </div>
        </>
    )
}

export default Register
    