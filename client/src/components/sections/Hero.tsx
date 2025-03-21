import { Reveal } from '@/hooks/use-scroll-reveal';
import { scrollToElement } from '@/lib/utils';

const Hero = () => {
  const handleButtonClick = (id: string) => {
    scrollToElement(id);
  };

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden relative">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-purple-100 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-blue-100 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 relative">
              <span className="relative">Intelligent <span className="animate-gradient-text">Customer Support</span> Platform
                <div className="absolute top-0 right-16 star star-1"></div>
                <div className="absolute top-8 right-40 star star-2"></div>
                <div className="absolute top-16 right-24 star star-3"></div>
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              Transform your customer experience with our AI-powered solution that handles inquiries, schedules appointments, and generates leads 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => handleButtonClick('demo')}
                className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg text-center transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <i className="fas fa-play-circle mr-2"></i>Try Demo
              </button>
              <button 
                onClick={() => handleButtonClick('pricing')}
                className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium py-3 px-8 rounded-lg text-center transition-all border border-gray-200 dark:border-gray-700 shadow hover:shadow-md hover:-translate-y-1"
              >
                <i className="fas fa-tag mr-2"></i>View Pricing
              </button>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-dark-bg bg-gradient-to-r from-blue-400 to-blue-500 shadow-lg"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-dark-bg bg-gradient-to-r from-purple-400 to-purple-600 shadow-lg"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-dark-bg bg-gradient-to-r from-pink-400 to-pink-600 shadow-lg"></div>
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
            <div className="relative z-10 rounded-xl shadow-2xl overflow-hidden animate-float">
              <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
                <div className="absolute top-0 right-0 left-0 h-14 bg-gradient-to-r from-purple-500 to-blue-500 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="ml-3 bg-white/20 px-3 py-1 rounded-full text-xs text-white font-medium">Live Chat</div>
                </div>
                <div className="pt-20 pb-6 px-6">
                  <div className="chat-container bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 max-h-80 overflow-y-auto scrollbar-hide">
                    <div className="flex items-start mb-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center text-white text-xs font-bold mr-3 shadow-md">AI</div>
                      <div className="chat-message bg-white dark:bg-gray-700 shadow-sm self-start rounded-2xl py-2">
                        Hello! I'm your AI assistant. How can I help you today?
                      </div>
                    </div>
                    
                    <div className="flex items-start flex-row-reverse mb-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold ml-3 shadow-md">You</div>
                      <div className="chat-message bg-primary/90 text-white ml-auto rounded-2xl py-2 shadow-sm">
                        I'd like to know more about your service packages.
                      </div>
                    </div>
                    
                    <div className="flex items-start mb-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center text-white text-xs font-bold mr-3 shadow-md">AI</div>
                      <div className="chat-message bg-white dark:bg-gray-700 shadow-sm self-start rounded-2xl py-2">
                        We offer Basic, Advanced, and Enterprise plans. Each includes different levels of support and features. Would you like me to explain the differences?
                      </div>
                    </div>
                    
                    <div className="flex items-start flex-row-reverse mb-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold ml-3 shadow-md">You</div>
                      <div className="chat-message bg-primary/90 text-white ml-auto rounded-2xl py-2 shadow-sm">
                        Yes, please tell me about the Enterprise plan.
                      </div>
                    </div>
                    
                    <div className="flex items-start mb-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center text-white text-xs font-bold mr-3 shadow-md">AI</div>
                      <div className="chat-message bg-white dark:bg-gray-700 shadow-sm self-start rounded-2xl py-2">
                        <p className="mb-2">The Enterprise plan includes:</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>24/7 call handling</li>
                          <li>Multilingual support</li>
                          <li>Dedicated account management</li>
                          <li>Advanced analytics dashboard</li>
                        </ul>
                        <p className="mt-2">It's perfect for large organizations with high customer interaction volume.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start flex-row-reverse mb-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold ml-3 shadow-md">You</div>
                      <div className="chat-message bg-primary/90 text-white ml-auto rounded-2xl py-2 shadow-sm">
                        Great! Can I schedule a demo?
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center text-white text-xs font-bold mr-3 shadow-md">AI</div>
                      <div className="chat-message bg-white dark:bg-gray-700 shadow-sm self-start rounded-2xl py-2">
                        Absolutely! I can help you schedule a personalized demo with our team. What date works best for you?
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex bg-gray-50 dark:bg-gray-900 p-2 rounded-lg">
                    <input 
                      type="text" 
                      placeholder="Type your message..." 
                      className="flex-1 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white" 
                      readOnly 
                    />
                    <button className="ml-2 bg-primary hover:bg-primary/80 text-white p-3 rounded-lg transition-all hover:shadow-lg">
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
