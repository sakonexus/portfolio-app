import { RefObject, useEffect, useRef, useState } from 'react';
import { useGetViewportWidth } from '@/hooks/get-viewport-width.js';

const WebDevSectionDivider = ({ parentRef, setSectionDividerHeight }: {parentRef: RefObject<HTMLDivElement>, setSectionDividerHeight: (arg0: number) => void}) => {
  const dividerRef = useRef<HTMLDivElement>(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [maxTranslateY, setMaxTranslateY] = useState(0);
  const [svgPathIndex, setSvgPathIndex] = useState(0);

  const { viewportWidth } = useGetViewportWidth();

  const dividerOffset = viewportWidth > 935 ? 300 : 100;

  useEffect(() => {
    const handleScroll = () => {
      if(
        parentRef.current && dividerRef.current
      ) {
        const parentHeight = parentRef.current.offsetHeight;
        const dividerHeight = dividerRef.current.offsetHeight;
        const maxY = parentHeight - dividerHeight;
        const currentScrollY = window.scrollY;
  
        setSectionDividerHeight(dividerHeight);
  
        // Calculate the scroll percentage from top of page to parent element
        const percentage = (currentScrollY / maxY) * 100;
        setScrollPercentage(percentage);
  
        // Determine the SVG path index based on the scroll percentage
        const newIndex = Math.floor((percentage / 100) * 5); // Divide by number of SVG frames
        setSvgPathIndex(newIndex);
  
        if (currentScrollY > maxY) {
          setSvgPathIndex(4);
        }
  
        setMaxTranslateY(maxY + 3);
      }
      
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [parentRef, scrollPercentage, setSectionDividerHeight]);

  const translateY = Math.min(window.scrollY, maxTranslateY + dividerOffset); // Speed of SVG movement to bottom of parent element

  const paths = [
    // SVG Frames
    'M2349,177.5c66.6,8.6,118.3,36.4,151,58v765H0v-811c73.2,42.1,188.9,93.5,326.2,83C538,256.3,623.6,97.1,751,137.5,887.9,180.9,868.8,387.4,990.5,414s166-169,361.5-220.5c240.6-63.4,345.9,190.5,602,125C2110.6,278.4,2182.8,156,2349,177.5Z',
    'M2331,140.5c66,36,24,107,169,141v719H0v-758c82-43,163-72,326.2,30C506.3,385,580.6,139.1,708,179.5c136.9,43.4,160.3,140.4,282,167s190.7-8.7,372-98c264-130,210,145,592,70C2112.7,287.3,2183.8,60.2,2331,140.5Z',
    'M2331,140.5c66,36,24,107,169,141v719H0v-758c82-43,163-72,326.2,30C506.3,385,580.6,139.1,708,179.5c136.9,43.4,160.3,140.4,282,167s190.7-8.7,372-98c264-130,210,145,592,70C2112.7,287.3,2183.8,60.2,2331,140.5Z',
    'M2309,183.5c66,36,46,64,191,98v719H0v-691c97,24,146.8-158,310-56C490.1,366,627.6,96.1,755,136.5c136.9,43.4,105.3,137.4,227,164s171-29,380-52c292.5-32.2,178,102,560,27C2080.7,244.3,2161.8,103.2,2309,183.5Z',
    'M2276,238.5c93.4,96.7,131,138,224,176v586H0v-617c97,24,84.1-224.2,310-80,235,150,291.6-169.4,419-129,136.9,43.4,133.3,187.4,255,214s147-107,365-144c183.5-31.1,212,476,545,111C2003,236.1,2163,121.5,2276,238.5Z',
  ];

  return (
    <div
      ref={dividerRef}
      className={`z-40 w-full absolute`}
      style={{
        transform: `translateY(${translateY - dividerOffset}px)`,
        transition:
          'translate 500ms ease-in-out, top 1ms linear, bottom 1ms linear',
      }}
    >
      <svg
        id="svgCurve"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -50 2500 800"
      >
        <defs>
          <filter id="drop-shadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="20" />
            <feOffset dx="-1" dy="-1" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.4" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d={paths[svgPathIndex]}
          transform="translate(0 -150)"
          filter="url(#drop-shadow)"
          fill="#fff"
          style={{ transition: 'all 700ms ease-in-out' }}
        />
      </svg>
    </div>
  );
};

export default WebDevSectionDivider;
