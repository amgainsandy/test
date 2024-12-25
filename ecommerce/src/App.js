import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Hi/Login";
import Signup from "./Hi/Signup";
import Navbar from "./Hi/Navbar";
import ProductDetails from "./Hi/ProductDetails";
import Home from "./Hi/Home";

function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
