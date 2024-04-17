import { useEffect } from 'react';

export const useIntersectionObserver = (observeItems) => {
  useEffect(() => {
    const options = {
      rootMargin: '0px',
      threshold: 0.55,
      root: null,
    };

    // The key is the id of the section and the value is the id of the sidebar link
    const idToTargetMap = {
      am: 'about',
      wde: 'WDexperience',
      dme: 'DMexperience',
      tik: 'tech',
      pg: 'playground',
      cm: 'contact',
    };

    const toggleShadowLinkClass = (id, add) => {
      const targetId = idToTargetMap[id];
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          if (add) {
            targetElement.classList.add('shadow-link');
          } else {
            targetElement.classList.remove('shadow-link');
          }
        }
      }
    };

    const toggleCard = (id, isIntersecting) => {
      const targetId = 'wde';

      const targetElement = document.getElementById(targetId);
      const cardElements =
        document.getElementById('wd-card-container').childNodes;

      if (targetElement.id == id && isIntersecting) {
        cardElements.forEach((element, index) => {
          if (index != 0) {
            element.style.transitionDelay = (index * 100).toString() + 'ms';
          }
          element.classList.remove('opacity-0');
          element.style.top = '0';
        });

        document.getElementById('wd-card-container').childNodes;
      } else {
        cardElements.forEach((element) => {
          element.classList.add('opacity-0');
          element.style.top = '60rem';
        });
      }
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const { id } = entry.target;
        if (entry.isIntersecting) {
          toggleShadowLinkClass(id, true);
        } else {
          toggleShadowLinkClass(id, false);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    // Observe each element in the observeItems array
    observeItems.forEach((element) => {
      element.current && observer.observe(element.current);
    });

    // Trigger intersection check for each element when component mounts
    observeItems.forEach((element) => {
      if (element.current) {
        const mockEntry = {
          target: element.current,
          isIntersecting: true, // Assume it's intersecting for initial load
          intersectionRatio: 1, // Assume fully intersecting for initial load
          intersectionRect: element.current.getBoundingClientRect(), // Mock intersection rect
          rootBounds: observer.rootBounds || null, // Mock root bounds
          boundingClientRect: element.current.getBoundingClientRect(), // Mock bounding client rect
          time: Date.now(), // Mock timestamp
          root: observer.root || null, // Mock root element
        };
        observerCallback([mockEntry]);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [observeItems]);
};
