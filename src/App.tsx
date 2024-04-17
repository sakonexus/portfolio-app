import Layout from './Pages/Layout/Layout';
import Home from './components/Home';
import { MutableRefObject, useRef } from 'react';

function App() {
  const heroRef = useRef(null);
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);
  const section5 = useRef(null);

  const observeItems: MutableRefObject<HTMLElement | null>[] = [
    heroRef,
    section1,
    section2,
    section3,
    section4,
    section5,
  ];

  // const QUERY = encodeURIComponent('*[_type == "page"]');

  // const URL = `https://${
  //   import.meta.env.VITE_SANITY_PROJECT_ID
  // }.api.sanity.io/v2021-10-21/data/query/${
  //   import.meta.env.VITE_SANITY_DATASET
  // }?query=${QUERY}`;

  // console.log('PROJECT ID', import.meta.env.VITE_SANITY_PROJECT_ID);

  // useEffect(() => {
  //   fetch(URL)
  //     .then((res) => res.json())
  //     .then(({ result }) => {
  //       console.log(JSON.stringify(result));
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

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
            section4={section4}
            section5={section5}
          />
        }
      />
    </>
  );
}

export default App;
