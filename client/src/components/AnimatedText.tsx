import { useEffect, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
  children?: React.ReactNode;
}

export default function AnimatedText({ 
  text, 
  className = '', 
  delay = 0,
  wordDelay = 0.08 
}: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const words = text.split(' ');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block"
          style={{
            animation: isVisible ? `wordAppear 0.6s ease-out ${index * wordDelay}s both` : 'none',
          }}
        >
          {word}
          {index < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </span>
  );
}

export function AnimatedBlock({ 
  children, 
  className = '', 
  delay = 0 
}: { children: React.ReactNode; className?: string; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={className}
      style={{
        animation: isVisible ? `fadeInUp 0.8s ease-out both` : 'none',
      }}
    >
      {children}
    </div>
  );
}
