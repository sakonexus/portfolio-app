import profilePic from '../../../../public/images/about/about_me_profile.jpg';
import './index.css';
import GithubIcon from '/public/icons/github-icon.svg';
import LinkedInIcon from '/public/icons/linkedin-icon.svg';
import EmailIcon from '/public/icons/envelope-icon.svg';

const Hero = ({ heroRef }) => {
  return (
    <div
      ref={heroRef}
      id="am"
      className="bg-gradient-to-b from-sky-600 from-60% to-indigo-600 w-full h-screen flex justify-center"
    >
      <div className="relative flex justify-start sm:flex-col lg:flex-row sm:top-0 sm:w-full lg:w-8/12 lg:top-[-7rem]">
        <div className="flex flex-col justify-center sm:px-16 sm:order-2 lg:order-1">
          <div className="w-full text-left">
            <h1 className=" font-semibold sm:text-5xl 2xl:text-7xl">
              Hi, I'm Sarkis!
            </h1>
          </div>
          <div className="flex align-top flex-col">
            <div className="text-left text-4xl pt-2">
              I build things on the web.
            </div>
            <div className="text-left text-xl pt-2">
              Scroll <span className="scroll-down-text inline-block">down</span>{' '}
              to see more about what I can do.
            </div>
            <div className="flex flex-row pt-14 justify-between w-48">
              <span>
                <a
                  style={{ textDecoration: 'none' }}
                  href="https://github.com/sakonexus/portfolio-app"
                >
                  <img className="w-12" src={GithubIcon} alt="Github" />
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/skerelian/">
                  <img className="w-12" src={LinkedInIcon} alt="LinkedIn" />
                </a>
              </span>
              <span>
                <a href="mailto:skerelian@gmail.com" target="_blank">
                  <img className="w-12" src={EmailIcon} alt="Email me" />
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center sm:my-12 sm:order-1 lg:order-2 lg:ml-24 ">
          <div className="sm:w-72 lg:w-96">
            <img
              className="w-full rounded-full shadow-2xl drop-shadow-2xl"
              src={profilePic}
              alt="That's me!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
