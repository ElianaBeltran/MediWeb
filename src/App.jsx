import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from  "./Components/Login";
import UserHome from "./Components/UserHome";
import Meeting from "./Components/Meeting";
import Checkout from "./Components/Checkout";


function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/userHome" element={<UserHome />}></Route>
            <Route path="/meet" element={<Meeting />}></Route>
            <Route path="/checkout" element={<Checkout/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}
export default App