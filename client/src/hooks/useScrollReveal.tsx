import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'slideInUp' | 'slideInLeft' | 'slideInRight' | 'fadeInUp';
  delay?: number;
  className?: string;
}

export function ScrollReveal({ 
  children, 
  animation = 'slideInUp', 
  delay = 0,
  className = '' 
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        animation: isVisible ? `${animation} 0.8s ease-out ${delay}s both` : 'none',
      }}
    >
      {children}
    </div>
  );
}
