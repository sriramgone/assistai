import { Reveal } from '@/hooks/use-scroll-reveal';
import { scrollToElement } from '@/lib/utils';

const Hero = () => {
  const handleButtonClick = (id: string) => {
    scrollToElement(id);
  };

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              AI-Powered <span className="text-primary">Customer Support</span> Made Simple
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              Elevate your customer experience with our intelligent chatbot that handles inquiries, schedules appointments, and generates leads 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => handleButtonClick('demo')}
                className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg text-center transition-colors"
              >
                Try Demo
              </button>
              <button 
                onClick={() => handleButtonClick('pricing')}
                className="bg-gray-100 dark:bg-dark-card hover:bg-gray-200 dark:hover:bg-gray-800 font-medium py-3 px-6 rounded-lg text-center transition-colors"
              >
                View Pricing
              </button>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-dark-bg bg-blue-400"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-dark-bg bg-green-400"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-dark-bg bg-purple-400"></div>
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <span className="ml-2 font-medium">4.8/5</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">From over 500+ customer reviews</p>
              </div>
            </div>
          </Reveal>
          <div className="relative">
            <div className="relative z-10 rounded-xl shadow-xl overflow-hidden animate-float">
              <div className="relative bg-white dark:bg-dark-card rounded-xl overflow-hidden">
                <div className="absolute top-0 right-0 left-0 h-12 bg-gray-100 dark:bg-gray-800 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="mx-auto text-sm font-medium">AssistMe.AI Demo</div>
                </div>
                <div className="pt-16 pb-6 px-6">
                  <div className="chat-container">
                    <div className="chat-message bg-gray-100 dark:bg-gray-800 self-start rounded-tr-xl rounded-br-xl rounded-bl-xl">
                      Hello! I'm your AI assistant. How can I help you today?
                    </div>
                    <div className="chat-message bg-primary text-white ml-auto rounded-tl-xl rounded-tr-xl rounded-bl-xl">
                      I'd like to know more about your service packages.
                    </div>
                    <div className="chat-message bg-gray-100 dark:bg-gray-800 self-start rounded-tr-xl rounded-br-xl rounded-bl-xl">
                      We offer Basic, Advanced, and Enterprise plans. Each includes different levels of support and features. Would you like me to explain the differences?
                    </div>
                    <div className="chat-message bg-primary text-white ml-auto rounded-tl-xl rounded-tr-xl rounded-bl-xl">
                      Yes, please tell me about the Enterprise plan.
                    </div>
                    <div className="chat-message bg-gray-100 dark:bg-gray-800 self-start rounded-tr-xl rounded-br-xl rounded-bl-xl">
                      The Enterprise plan includes 24/7 call handling, multilingual support, dedicated account management, and advanced analytics. It's perfect for large retailers or organizations with high customer interaction volume.
                    </div>
                    <div className="chat-message bg-primary text-white ml-auto rounded-tl-xl rounded-tr-xl rounded-bl-xl">
                      Great! Can I schedule a demo?
                    </div>
                    <div className="chat-message bg-gray-100 dark:bg-gray-800 self-start rounded-tr-xl rounded-br-xl rounded-bl-xl">
                      Absolutely! I can help you schedule a personalized demo with our team. What date works best for you?
                    </div>
                  </div>
                  <div className="mt-4 flex">
                    <input type="text" placeholder="Type your message..." className="flex-1 border border-gray-200 dark:border-gray-700 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-dark-card" readOnly />
                    <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-r-lg transition-colors">
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-5 -right-4 w-20 h-20 bg-accent opacity-20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-5 -left-4 w-32 h-32 bg-secondary opacity-20 rounded-full filter blur-3xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
