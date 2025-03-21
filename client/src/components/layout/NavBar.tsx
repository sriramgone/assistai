import { useState } from 'react';
import { Link } from 'wouter';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Button } from '@/components/ui/button';
import { scrollToElement } from '@/lib/utils';

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavLinkClick = (id: string) => {
    scrollToElement(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-primary text-2xl font-bold mr-2 animate-pulse">
              <i className="fas fa-robot"></i>
            </div>
            <h1 className="text-xl font-bold">AssistMe<span className="animate-gradient-text">.AI</span></h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavLinkClick('features')} 
              className="font-medium hover:text-primary dark:text-gray-200 dark:hover:text-primary transition-all hover:-translate-y-1"
            >
              Features
            </button>
            <button 
              onClick={() => handleNavLinkClick('solutions')} 
              className="font-medium hover:text-primary dark:text-gray-200 dark:hover:text-primary transition-all hover:-translate-y-1"
            >
              Industries
            </button>
            <button 
              onClick={() => handleNavLinkClick('pricing')} 
              className="font-medium hover:text-primary dark:text-gray-200 dark:hover:text-primary transition-all hover:-translate-y-1"
            >
              Pricing
            </button>
            <button 
              onClick={() => handleNavLinkClick('demo')} 
              className="font-medium hover:text-primary dark:text-gray-200 dark:hover:text-primary transition-all hover:-translate-y-1"
            >
              Demo
            </button>
            <button 
              onClick={() => handleNavLinkClick('contact')} 
              className="font-medium hover:text-primary dark:text-gray-200 dark:hover:text-primary transition-all hover:-translate-y-1"
            >
              Contact
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <button 
              onClick={() => handleNavLinkClick('contact')}
              className="hidden md:inline-block bg-primary hover:bg-primary/90 text-white py-2 px-6 rounded-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
            >
              <i className="fas fa-rocket mr-1"></i> Get Started
            </button>
            
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-gray-700 dark:text-gray-300"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <i className="fas fa-bars"></i>
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden pb-4 ${mobileMenuOpen ? 'animate-fadeInDown' : 'hidden'}`}>
          <div className="flex flex-col space-y-4 mt-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md p-4 rounded-lg">
            <button 
              onClick={() => handleNavLinkClick('features')} 
              className="font-medium py-2 hover:text-primary dark:text-gray-200 dark:hover:text-primary hover:pl-2 transition-all"
            >
              <i className="fas fa-puzzle-piece mr-2"></i>Features
            </button>
            <button 
              onClick={() => handleNavLinkClick('solutions')} 
              className="font-medium py-2 hover:text-primary dark:text-gray-200 dark:hover:text-primary hover:pl-2 transition-all"
            >
              <i className="fas fa-building mr-2"></i>Industries
            </button>
            <button 
              onClick={() => handleNavLinkClick('pricing')} 
              className="font-medium py-2 hover:text-primary dark:text-gray-200 dark:hover:text-primary hover:pl-2 transition-all"
            >
              <i className="fas fa-tag mr-2"></i>Pricing
            </button>
            <button 
              onClick={() => handleNavLinkClick('demo')} 
              className="font-medium py-2 hover:text-primary dark:text-gray-200 dark:hover:text-primary hover:pl-2 transition-all"
            >
              <i className="fas fa-play-circle mr-2"></i>Demo
            </button>
            <button 
              onClick={() => handleNavLinkClick('contact')} 
              className="font-medium py-2 hover:text-primary dark:text-gray-200 dark:hover:text-primary hover:pl-2 transition-all"
            >
              <i className="fas fa-envelope mr-2"></i>Contact
            </button>
            <button 
              onClick={() => handleNavLinkClick('contact')}
              className="bg-primary hover:bg-primary/90 text-white py-3 px-4 rounded-lg text-center transition-all mt-2 shadow-md"
            >
              <i className="fas fa-rocket mr-2"></i>Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
