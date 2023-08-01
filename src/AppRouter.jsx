import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from '././Pages/Home/Home';
import Menu from './Pages/Menu/Menu';
import Order from '././Pages/Order/Order';
import QRCode from "./Pages/QRCode/QRCode";


export default function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Menu" element={<Menu/>}/>
            <Route path="/Order" element={<Order/>}/>
            <Route path="/QRCode" element={<QRCode/>}/>
        </Routes>
    )
}