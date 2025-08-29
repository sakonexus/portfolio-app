import ContactFormSection from './ContactFormSection';
import Hero from './Hero';
import WebDevSection from './WebDevSection';
import LifeCycleMarketingSection from './LifeCycleMarketingSection';
import Footer from '../Footer';

interface HomeProps {
  heroRef: React.RefObject<HTMLDivElement>;
  webdevRef: React.RefObject<HTMLDivElement>;
  marketingRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const Home = ({ heroRef, webdevRef, marketingRef, contactRef }: HomeProps) => {
  return (
    <div className="flex flex-col w-full">
      <Hero heroRef={heroRef} />
      <WebDevSection webdevRef={webdevRef} />
      <LifeCycleMarketingSection marketingRef={marketingRef} />
      <ContactFormSection contactRef={contactRef} />
      <Footer />
    </div>
  );
};

export default Home;
