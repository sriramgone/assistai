import { useState, useRef, useEffect } from 'react';
import { Reveal } from '@/hooks/use-scroll-reveal';

const industries = [
  {
    title: "Retail Chains",
    description: "Assist customers with product inquiries, inventory checks, and order status updates. Reduce wait times and improve satisfaction.",
    imageSrc: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    tags: ["Order Tracking", "Inventory Checks", "Product Recommendations"],
    tagColorClass: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
  },
  {
    title: "Hospitality & Restaurants",
    description: "Handle reservations, menu inquiries, and special requests. Provide seamless guest experiences around the clock.",
    imageSrc: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    tags: ["Reservations", "Menu Information", "Special Requests"],
    tagColorClass: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
  },
  {
    title: "Healthcare Providers",
    description: "Schedule appointments, answer common questions, and provide basic health information to patients 24/7.",
    imageSrc: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
    tags: ["Appointment Scheduling", "FAQ Answers", "Patient Follow-ups"],
    tagColorClass: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
  },
  {
    title: "Coaching & Consulting",
    description: "Answer inquiries about services, schedule consultations, and provide information about courses and programs.",
    imageSrc: "https://images.unsplash.com/photo-1558403194-611308249627",
    tags: ["Course Information", "Consultation Booking", "Lead Qualification"],
    tagColorClass: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
  }
];

const Industries = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -carouselRef.current.offsetWidth / 2, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: carouselRef.current.offsetWidth / 2, behavior: 'smooth' });
    }
  };

  const checkScrollable = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5); // 5px buffer for browser differences
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', checkScrollable);
      // Initial check
      checkScrollable();
      
      // Check on window resize
      window.addEventListener('resize', checkScrollable);
      
      return () => {
        carousel.removeEventListener('scroll', checkScrollable);
        window.removeEventListener('resize', checkScrollable);
      };
    }
  }, []);

  return (
    <section id="solutions" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Solutions</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Tailored AI assistance for various business sectors.</p>
        </Reveal>

        <div className="relative">
          <div 
            ref={carouselRef}
            className="carousel flex overflow-x-auto gap-6 pb-8 scrollbar-hide" 
            style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="carousel-item flex-none w-full sm:w-1/2 lg:w-1/3 h-full"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="industry-card bg-white dark:bg-dark-card rounded-xl overflow-hidden shadow-md hover:shadow-xl h-full flex flex-col transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-primary/20">
                  <div className="h-48 overflow-hidden relative">
                    <div 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 bg-cover bg-center animate-fadeIn"
                      style={{ backgroundImage: `url(${industry.imageSrc})` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
                    <div className="absolute bottom-0 left-0 p-4 w-full">
                      <h3 className="text-xl font-bold text-white">{industry.title}</h3>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">{industry.description}</p>
                    <div className="mt-2">
                      {industry.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className={`inline-block px-3 py-1 text-xs font-medium ${industry.tagColorClass} rounded-full mr-2 mb-2`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <a href="#" className="text-primary dark:text-primary-light hover:underline inline-flex items-center group">
                        See industry solutions 
                        <i className="fas fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {canScrollLeft && (
            <button 
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-dark-card w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none z-10 hidden md:flex"
              aria-label="Previous slide"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
          )}
          
          {canScrollRight && (
            <button 
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-dark-card w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none z-10 hidden md:flex"
              aria-label="Next slide"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Industries;
