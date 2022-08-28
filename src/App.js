import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contactus from './Contactus';
import Home from './Home';
import Navbar from './Navbar';
import Services from './Services';


export default function App() {
  return (
   
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
        <Route index element={<Home/>}></Route>
        <Route path="contactus" element={<Contactus/>}></Route>
        <Route path="services" element={<Services/>}></Route>


        </Route>
      </Routes>
      </BrowserRouter>
    </div>
    
  )
}

