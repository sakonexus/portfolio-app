import { useEffect, useRef, useState } from 'react';
import WebDevSectionDivider from '../WebDevSection/Divider';
import Card from './Card';
import { useElementInView } from '../../../hooks/element-in-view.js';

const WebDevSection = ({ section1 }) => {
  // const [scrollPercentage, setScrollPercentage] = useState(0);
  const [fontSize, setFontSize] = useState(4); // Initial font size
  const [textTranslate, setTextTranslate] = useState(0); // Initial translate location
  const [container, setContainer] = useState(0); // Initial translate location

  // const wdeInView = useElementInView('wde');
  const { elementInView, scrollPercentage } = useElementInView(section1);

  return (
    <div
      ref={section1}
      id="wde"
      className="relative bg-indigo-600 w-full h-screen"
    >
      <div className="w-full flex flex-row">
        <div className="relative">
          <h1
            id="wdHeader"
            className={`font-semibold text-white transition-all ease-in duration-1000 absolute ${
              elementInView
                ? 'translate-x-48 text-7xl opactiy-1'
                : '-translate-x-3/4 text-sm opacity-0'
            }`}
          >
            Projects
          </h1>
        </div>
      </div>
      <div
        id="wd-card-container"
        className="flex pt-36 flex-wrap items-center absolute m-auto pl-48"
      >
        <Card parentElementInView={elementInView} />
        <Card parentElementInView={elementInView} />
      </div>
      <div className="absolute w-full top-0">
        <WebDevSectionDivider parentRef={section1} />
      </div>
    </div>
  );
};

export default WebDevSection;
