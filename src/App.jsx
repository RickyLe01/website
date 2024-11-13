import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Resume from "./pages/Resume/Resume.jsx"
import Projects from "./pages/Projects/Projects.jsx"
import ScrollToTop from './pages/ScrollToTop.jsx'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

const HomePage = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <MyWork />
    <Contact />
  </>
);

export default App