import { useState, useRef, useEffect } from 'react';
import { Reveal } from '@/hooks/use-scroll-reveal';

const testimonials = [
  {
    quote: "AssistMe.AI has transformed our customer service. We're handling 3x the inquiries with the same team size, and our customers love the instant responses.",
    author: "Sarah Johnson",
    title: "Retail Chain Owner",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces"
  },
  {
    quote: "Our patients appreciate being able to schedule appointments and get basic information any time of day. The AI is remarkably accurate and has reduced our administrative workload significantly.",
    author: "Dr. Michael Chen",
    title: "Healthcare Provider",
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&h=100&fit=crop&crop=faces"
  },
  {
    quote: "The ROI has been incredible. Our bookings have increased by 40% since implementing AssistMe.AI, and we never miss a reservation request. Worth every penny.",
    author: "Amanda Rodriguez",
    title: "Restaurant Owner",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop&crop=faces"
  }
];

const Testimonials = () => {
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
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Trusted by businesses of all sizes.</p>
        </Reveal>

        <div className="relative">
          <div 
            ref={carouselRef}
            className="carousel flex overflow-x-auto gap-6 pb-8" 
            style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="carousel-item flex-none w-full sm:w-1/2 lg:w-1/3"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="bg-white dark:bg-dark-card rounded-xl p-8 shadow-sm h-full">
                  <div className="flex text-yellow-400 mb-4">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full mr-4 overflow-hidden shadow-md">
                      <img src={testimonial.avatar} alt={testimonial.author} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-medium">{testimonial.author}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</p>
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
              aria-label="Previous testimonial"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
          )}
          
          {canScrollRight && (
            <button 
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-dark-card w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none z-10 hidden md:flex"
              aria-label="Next testimonial"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
