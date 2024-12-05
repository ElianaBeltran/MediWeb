import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";


function Login (){
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/login', values)
        .then(res => {
            if(res.data.Status === "Success") {
                navigate('/userHome')
            } else{
                alert(res.data.Error)
            }
        })
        .then(err => console.log(err));
    }
    return (
        <div className="home-container">
            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                    <img src={BannerBackground} alt=""/>
                </div>
                
            </div>
        <div className='box-info'>
            <div className='box-info-container'>
                <h2 className="primary-text">Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="secondary-text"><strong>Correo Electrónico</strong></label>
                        <input type="email" placeholder="Ingrese su correo electrónico" name="email" onChange={e => setValues({...values, email: e.target.value})} className="custom-input"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="secondary-text"><strong>Contraseña</strong></label>
                        <input type="password" placeholder="Ingrese su contraseña" name="password" onChange={e => setValues({...values, password: e.target.value})} className="custom-input"/>
                    </div>

                    <div className="mb-3">
                        <button type="submit" className="login-button">Iniciar Sesión</button>
                        <p className="secondary-text">Acepta los términos y políticas de uso.</p>
                        <Link to="/register" className="create-account-button">Crear Cuenta</Link>
                    </div>
                    <div className="back-home-container">
                    <a href="/" className="back-home-button">Volver a Inicio</a>
                    </div>
                  
                </form>
            </div>
        </div>
        </div> 
    )
}

export default Login