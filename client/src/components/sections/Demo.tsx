import { useState } from 'react';
import { Reveal } from '@/hooks/use-scroll-reveal';

interface DemoQuestion {
  id: string;
  text: string;
  answer: string;
}

interface ChatMessage {
  text: string;
  isUser: boolean;
}

const demoQuestions: DemoQuestion[] = [
  {
    id: "pricing",
    text: "Tell me about your pricing plans",
    answer: "We offer three subscription plans: Basic ($99/month), Advanced ($249/month), and Enterprise ($499/month). Each plan includes different features and interaction volumes. Would you like more details on a specific plan?"
  },
  {
    id: "integration",
    text: "How does the website integration work?",
    answer: "Integration is simple! We provide a JavaScript snippet that you add to your website. It takes less than 5 minutes to set up, and our team is available to help if needed. No technical expertise required."
  },
  {
    id: "features",
    text: "What features do you offer?",
    answer: "AssistMe.AI offers website chatbot integration, AI-powered customer support, call handling, industry-specific customization, flexible subscription plans, and a detailed analytics dashboard. Each feature is designed to enhance your customer experience."
  },
  {
    id: "custom",
    text: "Can I customize the chatbot for my industry?",
    answer: "Absolutely! We tailor our AI to understand industry-specific terminology and processes. We have specialized solutions for retail, healthcare, hospitality, coaching, and many other sectors. Your chatbot will be trained on your specific business needs."
  }
];

const Demo = () => {
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { text: "Hi there! 👋 I'm your AI assistant. How can I help you today?", isUser: false }
  ]);

  const handleQuestionSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedQuestion(event.target.value);
  };

  const handleSendQuestion = () => {
    if (!selectedQuestion) return;

    const question = demoQuestions.find(q => q.id === selectedQuestion);
    if (!question) return;

    // Add user question to chat
    setChatMessages(prev => [...prev, { text: question.text, isUser: true }]);

    // Simulate typing delay
    setTimeout(() => {
      // Add AI answer
      setChatMessages(prev => [...prev, { text: question.answer, isUser: false }]);
      
      // Reset selected question
      setSelectedQuestion("");
    }, 1000);
  };

  return (
    <section id="demo" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Try Our Demo</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Experience the power of AssistMe.AI firsthand.</p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Reveal>
              <h3 className="text-2xl font-bold mb-4">See How It Works</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our AI-powered chatbot provides seamless customer support, handling inquiries and scheduling appointments with natural, human-like responses.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-secondary">
                    <i className="fas fa-comments"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Natural Conversations</h4>
                    <p className="text-gray-600 dark:text-gray-300">Our AI understands context and maintains conversation flow.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Smart Responses</h4>
                    <p className="text-gray-600 dark:text-gray-300">Provides accurate information tailored to your business.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-accent">
                    <i className="fas fa-headset"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">24/7 Availability</h4>
                    <p className="text-gray-600 dark:text-gray-300">Never miss a customer inquiry, day or night.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          
          <div className="order-1 lg:order-2">
            <Reveal>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="p-4 bg-gradient-to-r from-primary to-primary-dark text-white flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary mr-3">
                    <i className="fas fa-robot"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">AssistMe.AI Demo</h4>
                    <p className="text-sm opacity-80">Online now</p>
                  </div>
                </div>
                <div className="px-4 py-2 bg-yellow-50 dark:bg-yellow-900/20 border-y border-yellow-100 dark:border-yellow-800">
                  <p className="text-xs text-yellow-800 dark:text-yellow-200">
                    <i className="fas fa-info-circle mr-1"></i> 
                    Demo Version: The full product supports custom message input, not just pre-selected questions.
                  </p>
                </div>
                <div 
                  className="chat-container p-4 h-[400px] overflow-y-auto"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }}
                >
                  {chatMessages.map((message, index) => (
                    <div
                      key={index}
                      className={`chat-message ${
                        message.isUser 
                          ? 'bg-primary text-white ml-auto rounded-tl-xl rounded-tr-xl rounded-bl-xl' 
                          : 'bg-gray-100 dark:bg-gray-700 dark:text-white self-start rounded-tr-xl rounded-br-xl rounded-bl-xl'
                      }`}
                      style={{
                        maxWidth: '80%',
                        padding: '10px 15px',
                        marginBottom: '10px',
                        borderRadius: '18px'
                      }}
                    >
                      {message.text}
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t border-gray-100 dark:border-gray-800 flex">
                  <select
                    id="demo-question"
                    value={selectedQuestion}
                    onChange={handleQuestionSelect}
                    className="flex-1 border border-gray-200 dark:border-gray-700 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">Select a question...</option>
                    {demoQuestions.map(question => (
                      <option key={question.id} value={question.id}>
                        {question.text}
                      </option>
                    ))}
                  </select>
                  <button 
                    onClick={handleSendQuestion}
                    className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-r-lg transition-colors"
                  >
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
