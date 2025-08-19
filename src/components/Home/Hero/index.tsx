import profilePic from '../../../../public/images/about/about_me_profile.jpg';
import './index.css';
import ContactModule from './ContactModule';

const Hero = ({ heroRef }: { heroRef: React.RefObject<HTMLDivElement> }) => {
  return (
    <div
      ref={heroRef}
      id="am"
      className="bg-gradient-to-b from-sky-600 from-60% to-indigo-600 w-full h-screen flex justify-center"
    >
      <div className="relative flex justify-start sm:flex-col lg:flex-row sm:top-0 sm:w-full lg:w-8/12 lg:top-[-7rem]">
        <div className="flex flex-col justify-center sm:items-center lg:items-start lg:px-0 sm:px-10 sm:order-2 lg:order-1">
          <div className="w-full lg:text-left sm:text-center">
            <h1 className=" font-semibold sm:text-4xl lg:text-6xl">
              Hi, I'm Sarkis!
            </h1>
          </div>
          <div className="flex align-top flex-col justify-center lg:items-start sm:items-center">
            <div className="lg:text-4xl pt-2 sm:text-2xl lg:text-left sm:text-center">
              I build things on the&nbsp;web.
            </div>
            <div className="lg:text-left lg:text-xl pt-2 sm:text-center sm:text-lg sm:w-56 lg:w-full">
              Scroll <span className="scroll-down-text inline-block">down</span>{' '}
              to see more about what I can&nbsp;do.
            </div>
          </div>
          <ContactModule />
        </div>
        <div className="flex justify-center items-center sm:my-10 sm:order-1 lg:order-2 lg:ml-24 ">
          <div className="w-full sm:max-w-44 lg:max-w-96">
            <img
              className="w-full rounded-full shadow-2xl drop-shadow-2xl"
              src={profilePic}
              alt="Picture of me in a tophat"
              title="Sarkis in a pretty fricken cool tophat"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
