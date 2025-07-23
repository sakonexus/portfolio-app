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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sidebarOpen]);

  const toggleSidebar = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div
      id={SIDEBAR_CONTAINER_ID}
      className={`z-[999] bg-sky-800/65 backdrop-filter backdrop-blur-xs min-h-full fixed justify-center flex ease-in-out duration-700 rounded-tr-xl rounded-br-xl ${
        sidebarOpen ? '-translate-x-0' : '-translate-x-full'
      } lg:w-3/12 sm:w-8/12`}
    >
      <div className="py-14 px-4 fixed">
        <SidebarItems />
      </div>
      <div className="w-full">&nbsp;</div>
      <div className="flex items-center sticky justify-center h-screen">
        <div
          className={`fixed top-auto bg-white/50 rounded-full shadow-slate-700 drop-shadow-lg transition ease-in-out duration-700 ${
            sidebarOpen ? '' : 'absolute translate-x-4'
          }`}
        >
          <div className="sm:w-16 sm:h-16  lg:w-24 lg:h-24">
            <button
              onClick={(event) => {
                toggleSidebar(event);
              }}
              className={`focus:outline-none transform transition-transform duration-500  ${ sidebarOpen && 'scale-x-[-1]'}`}
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
