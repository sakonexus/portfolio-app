import { MutableRefObject, useEffect } from 'react';

type ObserveItem = MutableRefObject<Element | null>;

interface IdToTargetMap {
  [key: string]: string;
}

export const useIntersectionObserver = (observeItems: ObserveItem[]): void => {
  useEffect(() => {
    const options: IntersectionObserverInit = {
      rootMargin: '0px',
      threshold: 0.55,
      root: null,
    };

    const idToTargetMap: IdToTargetMap = {
      am: 'about',
      wde: 'WDexperience',
      dme: 'DMexperience',
      tik: 'tech',
      pg: 'playground',
      cm: 'contact',
    };

    const toggleShadowLinkClass = (id: string, add: boolean) => {
      const targetId = idToTargetMap[id];
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          if (add) {
            targetElement.classList.add('shadow-link');
            targetElement.classList.add('sidebar-selected');
          } else {
            targetElement.classList.remove('shadow-link');
            targetElement.classList.remove('sidebar-selected');
          }
        }
      }
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
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
          intersectionRect: element.current.getBoundingClientRect(),
          rootBounds: observer.root
            ? (observer.root as Element).getBoundingClientRect()
            : null,
          boundingClientRect: element.current.getBoundingClientRect(),
          time: Date.now(),
          root: observer.root || null,
        };
        observerCallback([mockEntry], observer);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [observeItems]);
};
