import Section from './Section';
import Hero from './Hero';
import WebDevSection from './WebDevSection';
import LifeCycleMarketingSection from './LifeCycleMarketingSection';

interface HomeProps {
  heroRef: any;
  section1: React.ReactNode;
  section2: React.ReactNode;
  section3: React.ReactNode;
  section4: React.ReactNode;
  section5: React.ReactNode;
}

const Home = ({
  heroRef,
  section1,
  section2,
  section3,
  section4,
  section5,
}: HomeProps) => {
  return (
    <div>
      <Hero heroRef={heroRef} />
      <WebDevSection section1={section1} />
      <LifeCycleMarketingSection section2={section2} />
      <Section section3={section3} section4={section4} section5={section5} />
    </div>
  );
};

export default Home;
