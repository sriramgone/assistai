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
    <nav className="fixed w-full z-50 bg-white/90 dark:bg-dark-bg/90 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-primary dark:text-primary text-2xl font-bold mr-2">
              <i className="fas fa-robot"></i>
            </div>
            <h1 className="text-xl font-bold">AssistMe<span className="text-primary">.AI</span></h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavLinkClick('features')} className="font-medium hover:text-primary dark:hover:text-primary transition-colors">Features</button>
            <button onClick={() => handleNavLinkClick('solutions')} className="font-medium hover:text-primary dark:hover:text-primary transition-colors">Industries</button>
            <button onClick={() => handleNavLinkClick('pricing')} className="font-medium hover:text-primary dark:hover:text-primary transition-colors">Pricing</button>
            <button onClick={() => handleNavLinkClick('demo')} className="font-medium hover:text-primary dark:hover:text-primary transition-colors">Demo</button>
            <button onClick={() => handleNavLinkClick('contact')} className="font-medium hover:text-primary dark:hover:text-primary transition-colors">Contact</button>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <button 
              onClick={() => handleNavLinkClick('contact')}
              className="hidden md:inline-block bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg transition-colors"
            >
              Get Started
            </button>
            
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <i className="fas fa-bars"></i>
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden pb-4 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-3">
            <button onClick={() => handleNavLinkClick('features')} className="font-medium py-2 hover:text-primary dark:hover:text-primary">Features</button>
            <button onClick={() => handleNavLinkClick('solutions')} className="font-medium py-2 hover:text-primary dark:hover:text-primary">Industries</button>
            <button onClick={() => handleNavLinkClick('pricing')} className="font-medium py-2 hover:text-primary dark:hover:text-primary">Pricing</button>
            <button onClick={() => handleNavLinkClick('demo')} className="font-medium py-2 hover:text-primary dark:hover:text-primary">Demo</button>
            <button onClick={() => handleNavLinkClick('contact')} className="font-medium py-2 hover:text-primary dark:hover:text-primary">Contact</button>
            <button 
              onClick={() => handleNavLinkClick('contact')}
              className="bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg text-center transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
