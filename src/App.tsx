import Layout from './Pages/Layout/Layout';
import Home from './components/Home';
import { MutableRefObject, useRef } from 'react';

function App() {
  const heroRef = useRef(null);
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);

  const observeItems: MutableRefObject<HTMLElement | null>[] = [
    heroRef,
    section1,
    section2,
    section3,
  ];

  return (
    <>
      <Layout
        observeItems={observeItems}
        content={
          <Home
            heroRef={heroRef}
            section1={section1}
            section2={section2}
            section3={section3}
          />
        }
      />
    </>
  );
}

export default App;
