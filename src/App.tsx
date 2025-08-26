import React from 'react';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import MainPage from './pages/MainPage';
import './styles/globals.css';

function App() {
  return (
    <div className="min-h-screen bg-primary text-light overflow-x-hidden">
      <Navbar />
      
      <main className="pb-24 md:pb-0">
        <MainPage />
      </main>

      <BottomNav />
      <ThemeToggle />
      <Footer />
    </div>
  );
}

export default App;
