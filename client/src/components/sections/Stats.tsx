import { useRef, useEffect } from 'react';
import { Reveal } from '@/hooks/use-scroll-reveal';
import { animateCounter } from '@/lib/utils';

const stats = [
  { value: 500, label: "Happy Clients", suffix: "+", color: "text-primary" },
  { value: 98, label: "Customer Satisfaction", suffix: "%", color: "text-secondary" },
  { value: 24, label: "Support", suffix: "/7", color: "text-accent" },
  { value: 30, label: "Cost Reduction", suffix: "%", color: "text-yellow-500" }
];

const Stats = () => {
  const statsRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLSpanElement;
            const value = parseInt(target.dataset.value || "0", 10);
            animateCounter(target, value);
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.5 }
    );

    statsRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      statsRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="py-14 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <Reveal key={index}>
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                <span 
                  ref={el => statsRefs.current[index] = el}
                  data-value={stat.value}
                  className="counter"
                >
                  0
                </span>
                {stat.suffix}
              </div>
              <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
