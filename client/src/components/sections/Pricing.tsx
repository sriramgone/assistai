import { useState } from 'react';
import { Reveal } from '@/hooks/use-scroll-reveal';
import { scrollToElement } from '@/lib/utils';

type PlanType = 'monthly' | 'annual';

interface PlanPrice {
  monthly: string;
  annual: string;
}

interface Plan {
  name: string;
  description: string;
  price: PlanPrice;
  features: Array<{text: string; included: boolean}>;
  popular?: boolean;
}

const plans: Plan[] = [
  {
    name: "Basic",
    description: "Perfect for small businesses",
    price: { monthly: "$99", annual: "$79" },
    features: [
      { text: "Website chatbot integration", included: true },
      { text: "Up to 500 interactions/month", included: true },
      { text: "Basic analytics dashboard", included: true },
      { text: "Standard support (9-5)", included: true },
      { text: "Call handling", included: false },
      { text: "Advanced customization", included: false }
    ]
  },
  {
    name: "Advanced",
    description: "For growing businesses",
    price: { monthly: "$249", annual: "$199" },
    popular: true,
    features: [
      { text: "Everything in Basic", included: true },
      { text: "Up to 2,000 interactions/month", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Priority support", included: true },
      { text: "Basic call handling", included: true },
      { text: "Multilingual support", included: false }
    ]
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: { monthly: "$499", annual: "$399" },
    features: [
      { text: "Everything in Advanced", included: true },
      { text: "Unlimited interactions", included: true },
      { text: "Real-time analytics", included: true },
      { text: "24/7 dedicated support", included: true },
      { text: "Advanced call handling", included: true },
      { text: "Multilingual support", included: true }
    ]
  }
];

const Pricing = () => {
  const [planType, setPlanType] = useState<PlanType>('monthly');

  const handleContactClick = () => {
    scrollToElement('contact');
  };

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Choose the perfect plan for your business needs.</p>
          <div className="mt-8 inline-flex items-center p-1 bg-gray-100 dark:bg-dark-card rounded-lg">
            <button 
              onClick={() => setPlanType('monthly')}
              className={`py-2 px-4 rounded-md ${planType === 'monthly' ? 'bg-white dark:bg-gray-800 shadow-sm' : ''}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setPlanType('annual')}
              className={`py-2 px-4 rounded-md ${planType === 'annual' ? 'bg-white dark:bg-gray-800 shadow-sm' : ''}`}
            >
              Annual (Save 20%)
            </button>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Reveal 
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 ${
                plan.popular 
                  ? 'shadow-lg relative z-10 transform scale-105' 
                  : 'shadow-sm hover:shadow-md transition-all'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1">
                  POPULAR
                </div>
              )}
              <div className={`p-8 border-b border-gray-100 dark:border-gray-800 ${
                plan.popular ? 'bg-gradient-to-r from-primary/5 to-secondary/5' : ''
              }`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold">{plan.price[planType]}</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">/month</span>
                </div>
                <button 
                  onClick={handleContactClick}
                  className={`block w-full py-3 px-4 text-center rounded-lg ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary-dark text-white' 
                      : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                  } transition-colors font-medium`}
                >
                  Get Started
                </button>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      {feature.included ? (
                        <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                      ) : (
                        <i className="fas fa-times text-gray-400 mt-1 mr-3"></i>
                      )}
                      <span className={!feature.included ? 'text-gray-400' : ''}>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
