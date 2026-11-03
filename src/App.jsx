
import React from "react";
import {Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar'

import Butterfly from "./Components/Butterfly";

import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Products from './Pages/Products/Products'
function App() {
  return (
  <>

      {/* Navbar har page par show hoga */}
      <Navbar />
      <Butterfly />

      {/* Page content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/products" element={<Products />} /> 
        {/* <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />  */}
      </Routes> 
</>
  
  );
}

export default App;