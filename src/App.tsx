import Layout from './Pages/Layout/Layout';
import Home from './components/Home';
import { MutableRefObject, useRef } from 'react';

function App() {
  const heroRef = useRef(null);
  const webdevRef = useRef(null);
  const marketingRef = useRef(null);
  const contactRef = useRef(null);

  const observeItems: MutableRefObject<HTMLElement | null>[] = [
    heroRef,
    webdevRef,
    marketingRef,
    contactRef,
  ];

  return (
    <Layout
      observeItems={observeItems}
      content={
        <Home
          heroRef={heroRef}
          webdevRef={webdevRef}
          marketingRef={marketingRef}
          contactRef={contactRef}
        />
      }
    />
  );
}

export default App;
