import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import Home from './pages/Home';
import Academics from './pages/Academics';
import Experience from './pages/Experience';
import Publications from './pages/Publications';
import PersonalLife from './pages/PersonalLife';
import Contact from './pages/Contact';
import LeadershipAndService from './pages/LeadershipAndService';
import Gallery from './pages/Gallery';
import './styles/globals.css';

// Scroll restoration component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll to top when navigating to a new page
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary text-light overflow-x-hidden">
        <ScrollToTop />
        <Navbar />
        
        <main className="pb-24 md:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/research-publications" element={<Publications />} />
            <Route path="/personal-life" element={<PersonalLife />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/leadership-and-service" element={<LeadershipAndService />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>

        <BottomNav />
        <ThemeToggle />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
