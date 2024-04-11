import React from "react";
import { Routes, Route, Switch, Navigate } from "react-router-dom";

import Home from "./../pages/Home";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Services from "../pages/Services";
import Dashboard from "../pages/Dashboard";
import ContactUs from "../pages/ContactUs";
import Profile from "../pages/Profile";
import Login from "../pages/Login";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
};

export default Routers;
