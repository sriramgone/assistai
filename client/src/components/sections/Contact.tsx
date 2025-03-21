import { useState } from 'react';
import { Reveal } from '@/hooks/use-scroll-reveal';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  email: string;
  company: string;
  industry: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  company: '',
  industry: '',
  message: ''
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    const { name, email, company, industry } = formData;
    if (!name || !email || !company || !industry) {
      toast({
        title: "Form Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    // Success message
    toast({
      title: "Message Sent",
      description: "Thank you for your message! Our team will contact you shortly.",
      variant: "default",
    });
    
    // Reset form
    setFormData(initialFormData);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Ready to see how AssistMe.AI can help your business? Fill out the form and our team will contact you for a personalized demo.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Email Us</h4>
                  <p className="text-gray-600 dark:text-gray-300">info@assistme.ai</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-secondary">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Call Us</h4>
                  <p className="text-gray-600 dark:text-gray-300">(123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-accent">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Office</h4>
                  <p className="text-gray-600 dark:text-gray-300">123 Tech Park, San Francisco, CA</p>
                </div>
              </div>
            </div>
          </Reveal>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
            <Reveal>
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block mb-2 font-medium">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white" 
                    placeholder="John Doe" 
                    required 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white" 
                    placeholder="john@example.com" 
                    required 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="company" className="block mb-2 font-medium">Company Name</label>
                  <input 
                    type="text" 
                    id="company" 
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white" 
                    placeholder="Your Company" 
                    required 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="industry" className="block mb-2 font-medium">Industry</label>
                  <select 
                    id="industry" 
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white" 
                    required
                  >
                    <option value="" disabled>Select your industry</option>
                    <option value="retail">Retail</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="hospitality">Hospitality & Restaurants</option>
                    <option value="coaching">Coaching & Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white" 
                    placeholder="Tell us more about your business needs"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
