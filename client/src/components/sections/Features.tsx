import { Reveal } from '@/hooks/use-scroll-reveal';

const features = [
  {
    icon: "fas fa-globe",
    title: "Website Integration",
    description: "Seamlessly embed our AI chatbot into your website with just a few lines of code. No technical expertise required.",
    bgClass: "bg-blue-100 dark:bg-blue-900/30",
    iconClass: "text-primary"
  },
  {
    icon: "fas fa-robot",
    title: "AI-Powered Support",
    description: "Provide instant responses to FAQs, track orders, and schedule appointments with advanced natural language processing.",
    bgClass: "bg-green-100 dark:bg-green-900/30",
    iconClass: "text-secondary"
  },
  {
    icon: "fas fa-phone-alt",
    title: "Call Handling",
    description: "Our AI voice system manages customer calls, reducing the need for human intervention while maintaining personal touch.",
    bgClass: "bg-purple-100 dark:bg-purple-900/30",
    iconClass: "text-accent"
  },
  {
    icon: "fas fa-industry",
    title: "Industry Customization",
    description: "Tailor responses for specific industries like hospitality, healthcare, coaching, and retail with specialized knowledge.",
    bgClass: "bg-yellow-100 dark:bg-yellow-900/30",
    iconClass: "text-yellow-500"
  },
  {
    icon: "fas fa-credit-card",
    title: "Flexible Subscriptions",
    description: "Choose from monthly or annual plans based on your business size and customer interaction volume needs.",
    bgClass: "bg-red-100 dark:bg-red-900/30",
    iconClass: "text-red-500"
  },
  {
    icon: "fas fa-chart-line",
    title: "Analytics Dashboard",
    description: "Gain valuable insights into customer interactions, inquiries, and overall chatbot performance metrics.",
    bgClass: "bg-indigo-100 dark:bg-indigo-900/30",
    iconClass: "text-indigo-500"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Modern Businesses</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Our AI-powered solution revolutionizes how businesses interact with customers.</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Reveal key={index} className="bg-white dark:bg-dark-card rounded-xl p-8 shadow-sm hover:shadow-md transition-all">
              <div className={`w-14 h-14 rounded-full ${feature.bgClass} flex items-center justify-center ${feature.iconClass} mb-6`}>
                <i className={`${feature.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
