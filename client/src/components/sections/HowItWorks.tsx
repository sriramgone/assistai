import { Reveal } from '@/hooks/use-scroll-reveal';

const steps = [
  {
    number: "1",
    title: "Choose Your Plan",
    description: "Select the subscription that fits your business needs and customer volume."
  },
  {
    number: "2",
    title: "Customize Your Bot",
    description: "Train your AI with industry-specific data and personalize the appearance."
  },
  {
    number: "3",
    title: "Deploy & Scale",
    description: "Integrate with your website and phone systems to start engaging customers."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-primary opacity-90 dark:opacity-95 z-0"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80')",
          backgroundAttachment: "fixed",
          opacity: 0.1
        }}
      ></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-16 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How AssistMe.AI Works</h2>
          <p className="text-xl opacity-90">Simple integration, powerful results. Get started in minutes.</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          {steps.map((step, index) => (
            <Reveal key={index} className="text-center">
              <div className="w-16 h-16 rounded-full bg-white text-primary flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="opacity-90">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
