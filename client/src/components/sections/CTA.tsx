import { Reveal } from '@/hooks/use-scroll-reveal';
import { scrollToElement } from '@/lib/utils';

const CTA = () => {
  const handleContactClick = () => {
    scrollToElement('contact');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
        <Reveal className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Customer Support?</h2>
          <p className="text-xl opacity-90 mb-8">Join hundreds of businesses that have revolutionized their customer experience with AssistMe.AI.</p>
          <button 
            onClick={handleContactClick}
            className="inline-block bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors text-lg"
          >
            Get Started Today
          </button>
        </Reveal>
      </div>
    </section>
  );
};

export default CTA;
