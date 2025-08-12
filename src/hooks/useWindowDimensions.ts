import { useState, useEffect } from 'react';

type WindowSizeCategory = 'sm' | 'md' | 'lg' | 'xl';

interface WindowDimensions {
  width: number;
  height: number;
  widthSize: WindowSizeCategory;
}

function getWindowDimensions(): WindowDimensions {
  if (typeof window === 'undefined') {
    return { width: 0, height: 0, widthSize: 'sm' };
  }

  const { innerWidth: width, innerHeight: height } = window;
  let widthSize: WindowSizeCategory;

  switch (true) {
    case width >= 280 && width < 768:
      widthSize = 'sm';
      break;
    case width >= 768 && width < 1024:
      widthSize = 'md';
      break;
    case width >= 1024 && width < 1280:
      widthSize = 'lg';
      break;
    case width >= 1280:
      widthSize = 'xl';
      break;
    default:
      widthSize = 'sm';
      break;
  }

  return { width, height, widthSize };
}

export default function useWindowDimensions(): WindowDimensions {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
