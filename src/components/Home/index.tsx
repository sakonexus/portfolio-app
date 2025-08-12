import ContactFormSection from './ContactFormSection';
import Hero from './Hero';
import WebDevSection from './WebDevSection';
import LifeCycleMarketingSection from './LifeCycleMarketingSection';

interface HomeProps {
  heroRef: React.RefObject<HTMLDivElement>;
  section1: React.RefObject<HTMLDivElement>;
  section2: React.RefObject<HTMLDivElement>;
  section3: React.RefObject<HTMLDivElement>;
}

const Home = ({ heroRef, section1, section2, section3 }: HomeProps) => {
  return (
    <div className="flex flex-col w-full">
      <Hero heroRef={heroRef} />
      <WebDevSection section1={section1} />
      <LifeCycleMarketingSection section2={section2} />
      <ContactFormSection section3={section3} />
    </div>
  );
};

export default Home;
