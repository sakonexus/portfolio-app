import { useState, useEffect } from 'react';

export const useGetViewportWidth = (): { viewportWidth: number } => {
  const [viewportWidth, setViewportWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { viewportWidth };
};
