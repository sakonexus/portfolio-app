import SidebarItems from '../SidebarItem';
import arrowRight from '/icons/arrow-right.svg';
import { useEffect, useState } from 'react';

const SIDEBAR_CONTAINER_ID = 'sidebarContainer';

const Container = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolledDown = window.scrollY > 0;
      const roundedScroll = Math.round(window.scrollY);

      if (roundedScroll == 0 && !isScrolledDown) return;

      sidebarOpen == true &&
        roundedScroll > 180 &&
        setSidebarOpen(!isScrolledDown);
    };

    // window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSidebar = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div
      id={SIDEBAR_CONTAINER_ID}
      className={`z-50 bg-sky-800 bg-opacity-65 backdrop-filter backdrop-blur-sm min-h-full fixed justify-center flex ease-in-out duration-700 rounded-tr-xl rounded-br-xl ${
        sidebarOpen ? '-translate-x-0' : '-translate-x-full'
      } lg:w-3/12 sm:w-8/12`}
    >
      <div className="py-14 px-4 fixed">
        <SidebarItems />
      </div>
      <div className="w-full">&nbsp;</div>
      <div className="flex items-center sticky justify-center h-screen">
        <div
          className={`fixed top-auto bg-white bg-opacity-50 rounded-full drop-shadow-lg transition ease-in-out duration-700 ${
            sidebarOpen ? '' : 'absolute translate-x-4'
          }`}
        >
          <div className="w-24 h-24">
            <button
              onClick={(event) => {
                toggleSidebar(event);
              }}
              className={`focus:outline-none transform transition-transform duration-500 ${
                sidebarOpen ? 'scale-x-[-1]' : 'scale-x-1'
              } `}
            >
              <img src={arrowRight} className={`w-full`} alt="Arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
