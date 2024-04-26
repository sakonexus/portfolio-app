import Sidebar from '../../components/Sidebar';
import { useIntersectionObserver } from '../../hooks/intersection-observer.js';
import { Dispatch, MutableRefObject, SetStateAction, useState } from 'react';
import Modal from '@/components/Modal/index.js';

interface LayoutProps {
  content?: JSX.Element;
  observeItems: MutableRefObject<Element | null>[];
}

const Layout = (props: LayoutProps) => {
  const { content, observeItems } = props;

  useIntersectionObserver(observeItems);

  return (
    <>
      <div className="">
        <Sidebar />
        <div className="w-full">{content ? content : <>none</>}</div>
      </div>
    </>
  );
};

export default Layout;
