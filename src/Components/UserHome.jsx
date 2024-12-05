import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Logo from "../Assets/Logo.svg";

import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import LogoutIcon from "@mui/icons-material/Logout"

import BannerBackground from "../Assets/home-banner-background.png"
import BannerImage from "../Assets/userhome-banner-image.png";
import{FiArrowRight} from "react-icons/fi";
import { margin } from "@mui/system";

function UserHome() {
    const [auth, setAuth] = useState(false)
    const [message, setMesage] = useState('')
    const [name, setName] = useState('')
    
    axios.defaults.withCredentials = true;
    

    useEffect(()=>{
        axios.get('http://localhost:3000/userHome')
        .then(res => {
            if(res.data.Status === "Success") {
                setAuth(true)
                setName(res.data.name)
            } else{
                setAuth(false)
                setMesage(res.data.Error)
            }
        })
        .then(err => console.log(err));
    }, [])


    const handleDelete = () => {
        axios.get('http://localhost:3000/logout')
        .then(res => {
            window.location.reload(true);
        }).catch(err => console.log(err))
    }

    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text:"Logout",
            icon:<LogoutIcon/>
        }
    ]
    return(
        <>
        <div className="home-container">
        { 
        
        auth ?
        <div>
            <nav>
                <div className="nav-logo-container">
                    <img src={Logo} alt="Logo"/>
                </div>
                <div className="navbar-links-container">
                
                    <Link className="logout-button" onClick={handleDelete}>Logout</Link>
                </div>
                <div className="navbar-menu-container">
                    <HiOutlineBars3 onClick={() => setOpenMenu(true)}/>
                </div>
                <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
                    <Box
                        sx={{ width: 250 }}
                        role="presentation"
                        onClick={() => setOpenMenu(false)}
                        onKeyDown={() => setOpenMenu(false)}
                    >
                        <List>
                            {menuOptions.map((item) => (
                                <ListItem key={item.text} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>{item.icon}</ListItemIcon>
                                        <ListItemText primary={item.text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                    </Box>
                </Drawer>
            </nav>
            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                    <img src={BannerBackground} alt=""/>
                </div>
               
                <div className="home-text-section">
                    <h1 className="primary-heading">
                        3:25 PM
                    </h1>
                    <p className="primary-text">
                        Le espera su siguiente cita, acceda:
                    </p>
                    <Link className="secondary-button" to="/meet">
                        Ir a la reunión <FiArrowRight/>
                    </Link>
                    <Link className="primary-button" to="/checkout">
                    Pagar Cita
                    </Link>
                </div>
                
                <div className="home-image-container">
                    <img src={BannerImage} alt="Banner"/>
                </div>
               
            </div>
       
        </div>
            

        
        :
        <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='bg-white p-3 rounded w-25'>
        <div className="mb-3">
            <h3 className="primary-text">{message}</h3>
            <Link to="/login" className="secondary-button">Login now</Link>
        </div>
        </div>
        </div>
         
        }
         </div> 
       <div/>
       </>
    )
}

export default UserHome