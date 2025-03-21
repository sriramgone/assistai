import { scrollToElement } from '@/lib/utils';

const Footer = () => {
  const handleLinkClick = (id: string) => {
    scrollToElement(id);
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="text-primary text-2xl font-bold mr-2">
                <i className="fas fa-robot"></i>
              </div>
              <h1 className="text-xl font-bold">AssistMe<span className="text-primary">.AI</span></h1>
            </div>
            <p className="text-gray-400 mb-4">
              AI-powered chatbot and call handling solutions for modern businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => handleLinkClick('features')} className="text-gray-400 hover:text-white transition-colors">Features</button></li>
              <li><button onClick={() => handleLinkClick('solutions')} className="text-gray-400 hover:text-white transition-colors">Industries</button></li>
              <li><button onClick={() => handleLinkClick('pricing')} className="text-gray-400 hover:text-white transition-colors">Pricing</button></li>
              <li><button onClick={() => handleLinkClick('demo')} className="text-gray-400 hover:text-white transition-colors">Demo</button></li>
              <li><button onClick={() => handleLinkClick('contact')} className="text-gray-400 hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Industries</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Retail</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Healthcare</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Hospitality</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Coaching</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Other Industries</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">GDPR Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AssistMe.AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
