import { useEffect, useRef, ReactNode } from 'react';

interface UseScrollRevealProps {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollReveal = ({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = false,
}: UseScrollRevealProps = {}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add('active');
            if (triggerOnce) {
              observer.disconnect();
            }
          } else if (!triggerOnce) {
            element.classList.remove('active');
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return ref;
};

interface RevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className = '',
  threshold,
  rootMargin,
  triggerOnce,
}) => {
  const ref = useScrollReveal({ threshold, rootMargin, triggerOnce });

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
};
