import Sidebar from '@/components/Sidebar';
import { useIntersectionObserver } from '@/hooks/intersection-observer';
import { MutableRefObject } from 'react';

interface LayoutProps {
  content?: JSX.Element;
  observeItems: MutableRefObject<Element | null>[];
}

const Layout = (props: LayoutProps) => {
  const { content, observeItems } = props;

  useIntersectionObserver(observeItems);

  return (
    <main className="flex w-full">
      <Sidebar />
      <div className="w-full">{content ? content : <>none</>}</div>
    </main>
  );
};

export default Layout;
