import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MRI from './pages/MRI';
import Packages from './pages/Packages';
import About from './pages/About';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AnimationObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    const refresh = () => document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    refresh();
    const timer = setInterval(refresh, 500);
    return () => { observer.disconnect(); clearInterval(timer); };
  }, []);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimationObserver />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mri" element={<MRI />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
