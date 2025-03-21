import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function revealOnScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.1 });

  const elements = document.querySelectorAll("[data-aos]");
  elements.forEach((element) => {
    observer.observe(element);
  });

  return () => {
    elements.forEach((element) => {
      observer.unobserve(element);
    });
  };
}

export const scrollToElement = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    // Add offset for the fixed header
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

export const animateCounter = (el: HTMLElement, target: number) => {
  let current = 0;
  const increment = target / 100;
  const timer = setInterval(() => {
    current += increment;
    el.textContent = Math.floor(current).toString();
    if (current >= target) {
      el.textContent = target.toString();
      clearInterval(timer);
    }
  }, 10);
};
