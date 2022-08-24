import "./App.css";

import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { useState } from "react";
import { Home } from "../pages/Home";
import { AboutUs } from "../pages/AboutUs";
import { Services } from "../pages/Services";
import { News } from "../pages/News";
import { Contact } from "../pages/Contact";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <>
      <Header />
      <Routes>
        <Route index element={< Navigate to='/Header' />} />
        <Route path="home" element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="services" element={<Services />} />
        <Route path="news" element={<News />} />
        <Route path="contact" element={<Contact />} />
        </Routes> 
      <Main />
      <Footer />
      </>
    </div>
  );
}

export default App;
