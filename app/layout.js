"use client";
import React from "react";
import Footer from "./Pages/Components/Footer/";
import Navbar from "./Pages/Components/Navbar/";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
