import React from 'react';
import Hero from '../components/Hero';
import Academics from './Academics';
import Experience from './Experience';
import Publications from './Publications';
import LeadershipAndService from './LeadershipAndService';
import PersonalLife from './PersonalLife';
import Gallery from './Gallery';
import Contact from './Contact';

const MainPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Academics Section */}
      <section id="academics">
        <Academics />
      </section>

      {/* Experience Section */}
      <section id="experience">
        <Experience />
      </section>

      {/* Research & Publications Section */}
      <section id="research-publications">
        <Publications />
      </section>

      {/* Leadership & Service Section */}
      <section id="leadership-and-service">
        <LeadershipAndService />
      </section>

      {/* Personal Life Section */}
      <section id="personal-life">
        <PersonalLife />
      </section>

      {/* Gallery Section */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default MainPage;
