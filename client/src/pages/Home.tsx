import { useEffect } from 'react';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import TrustedBy from '@/components/sections/TrustedBy';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import Industries from '@/components/sections/Industries';
import Stats from '@/components/sections/Stats';
import Pricing from '@/components/sections/Pricing';
import Demo from '@/components/sections/Demo';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import Contact from '@/components/sections/Contact';

// Import custom styles for animations
import '../styles/animations.css';

const Home = () => {
  // Floating chat button
  const handleChatButtonClick = () => {
    alert('This would open the chat interface in a production environment.');
  };

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      <NavBar />
      <Hero />
      <TrustedBy />
      <Features />
      <HowItWorks />
      <Industries />
      <Stats />
      <Pricing />
      <Demo />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      
      {/* Floating chat button */}
      <button 
        onClick={handleChatButtonClick}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:bg-primary-dark transition-colors z-50 animate-pulse"
      >
        <i className="fas fa-comments text-2xl"></i>
      </button>
    </div>
  );
};

export default Home;
