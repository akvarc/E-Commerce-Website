import Navbar from "./components/Navbar"
import "./App.css"
import React, { useState } from 'react';
import Shop from "./pages/Shop";
import Shopcategory from "./pages/Shopcategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Loginsignup from "./pages/Loginsignup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import men_banner from "./assets/banner.jpg"
import women_banner from "./assets/women_banner.avif"
import kids_banner from "./assets/kids_banner.jpg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<Shopcategory banner={men_banner} category="men" />} />
          <Route path="/women" element={<Shopcategory banner={women_banner} category="women" />} />
          <Route path="/kid" element={<Shopcategory banner={kids_banner} category="kid" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Loginsignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App;
