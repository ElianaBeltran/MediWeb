import { JaaSMeeting, JitsiMeeting } from '@jitsi/react-sdk';
import { Container } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import React, { useRef, useState, useEffect } from 'react';
import axios from "axios";

const Meeting = () =>  {

  axios.defaults.withCredentials = true;
  const navigate = useNavigate()

    
  window.onload = () => {
    const container = document.querySelector('#jaas-container');
    const api = new window.JitsiMeetExternalAPI("8x8.vc", {
      roomName: "vpaas-magic-cookie-9ca9ccd2bbf6457ca1ced51395e8202e/SampleAppPremierOpinionsDefyConsiderably",
      parentNode: container,
      height:800,
      configOverwrite: {
        disableInviteFunctions: true, // Desactiva la funcionalidad de invitar
    },
    interfaceConfigOverwrite: {
      TOOLBAR_BUTTONS: [
          'microphone', 'camera', 'fullscreen', 'hangup', // Botones permitidos
          'chat', 'tileview', 'videobackgroundblur', 'desktop'
      ]
  }
    
    });
    api.addListener('videoConferenceLeft', () => {
      axios.get('http://localhost:8000/userHome')
        .then(res => {
            navigate('/userHome')
        }).catch(err => console.log(err))
      console.log('La conferencia ha terminado');

  });
 
  }
  return(
    <div className="container mt-4">
        {
    //auth ?
      <body>
        <div id="jaas-container" style={{height:1000}}/>
        <div className="back-home-container">
                    <Link to="/userHome" className="back-home-button">Volver a Inicio</Link>
                </div>
      </body>
      //:
      //<body>
      //<div>
         // <h3>{message}</h3>
         // <h3>Login Now</h3>
         // <Link to="/login" className="btn btn-primary">Login</Link>
      //</div>
      //</body>
       }
      </div>
  
  )

}
export default Meeting;