import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToAnchor = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is no hash, scroll to top
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    // If there IS a hash (e.g., #contact)
    const elementId = hash.replace('#', '');
    
    // Function to handle scrolling
    const scrollToElement = () => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    // Attempt 1: Immediate
    scrollToElement();

    // Attempt 2: Small delay (100ms) - for simple renders
    const timeout1 = setTimeout(scrollToElement, 100);

    // Attempt 3: Longer delay (500ms) - waits for images/heavy layouts
    const timeout2 = setTimeout(scrollToElement, 500);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [pathname, hash]); // Rerun when path or hash changes

  return null;
};

export default ScrollToAnchor;