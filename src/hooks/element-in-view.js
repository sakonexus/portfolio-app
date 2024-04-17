import { useEffect, useState } from 'react';

export const useElementInView = (elementIdToCheck) => {
  const [elementInView, setElementInView] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementIdToCheck.current) return;

      const rect = elementIdToCheck.current.getBoundingClientRect();
      const scrollPercentage = (rect.top / window.innerHeight) * 100;
      const isElementInViewport =
        scrollPercentage < 80 && scrollPercentage > -70;

      setScrollPercentage(scrollPercentage);
      setElementInView(isElementInViewport);
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [elementIdToCheck]);

  return { elementInView, scrollPercentage };
};
