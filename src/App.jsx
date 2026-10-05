import React from 'react';
import ThreeBackground from './components/ThreeBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProfileSection from './components/ProfileSection';
import SkillsSection from './components/SkillsSection';
import LanguagesSection from './components/LanguagesSection';
import ContactFooter from './components/ContactFooter';

export default function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#060a17', color: '#f8fafc' }}>
      {/* 3D Dynamic Interactive Canvas Background */}
      <ThreeBackground />

      {/* Main Single Page Application Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main>
          <HeroSection />
          <ProfileSection />
          <SkillsSection />
          <LanguagesSection />
        </main>
        <ContactFooter />
      </div>
    </div>
  );
}
