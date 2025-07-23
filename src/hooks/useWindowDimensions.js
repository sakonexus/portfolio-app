import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;

  let widthSize = '';

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

  return {
    width,
    height,
    widthSize,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
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
