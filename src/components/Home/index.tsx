import Section from './Section';
import Hero from './Hero';
import WebDevSection from './WebDevSection';

const Home = ({
  heroRef,
  section1,
  section2,
  section3,
  section4,
  section5,
}) => {
  return (
    <div id="contentContainer">
      <Hero heroRef={heroRef} />
      <WebDevSection section1={section1} />
      <Section
        section2={section2}
        section3={section3}
        section4={section4}
        section5={section5}
      />
    </div>
  );
};

export default Home;
