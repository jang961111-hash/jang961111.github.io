import { useEffect, useRef, useState } from 'react';

const useScrollReveal = ({ threshold = 0.1, rootMargin = '0px' } = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // observer.unobserve(entry.target); // UNCOMMENT if you want it to trigger only once
      }
    }, { threshold, rootMargin });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin]);

  return { elementRef, isVisible };
};

export default useScrollReveal;
