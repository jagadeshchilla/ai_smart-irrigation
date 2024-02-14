import React from "react";
import { Routes, Route, Switch, Navigate } from "react-router-dom";

import Home from "./../pages/Home";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Services from "../pages/Services";

import ContactUs from "../pages/ContactUs";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
};

export default Routers;
