import profilePic from '../../../../public/images/about/about_me_profile.jpg';
import './index.css';
import GithubIcon from '/public/icons/github-icon.svg';
import LinkedInIcon from '/public/icons/linkedin-icon.svg';
import EmailIcon from '/public/icons/envelope-icon.svg';

const Hero = ({ heroRef }: { heroRef: React.RefObject<HTMLDivElement> }) => {
  return (
    <div
      ref={heroRef}
      id="am"
      className="bg-gradient-to-b from-sky-600 from-60% to-indigo-600 w-full h-screen flex justify-center"
    >
      <div className="relative flex justify-start sm:flex-col lg:flex-row sm:top-0 sm:w-full lg:w-8/12 lg:top-[-7rem]">
        <div className="flex flex-col justify-center lg:px-0 sm:px-10 sm:order-2 lg:order-1">
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
            <div className="flex flex-row mt-10 justify-between w-72 items-center bg-linear bg-gradient-to-tr from-transparent to-white py-4 px-8 rounded-full border border-gray-400 inset-shadow-sm inset-shadow-white">
              <span className="group flex justify-center items-center">
                <div className="absolute w-14 h-14 group-hover:bg-black/20 rounded-full transition-all duration-300 ease-in-out z-20">
                  &nbsp;
                </div>
                <a
                  style={{ textDecoration: 'none' }}
                  href="https://github.com/sakonexus/portfolio-app"
                  title="Visit Sarkis' GitHub"
                  className="z-50"
                >
                  <img className="w-[2.2rem]" src={GithubIcon} alt="Github" />
                </a>
              </span>
              <span className="group flex justify-center items-center">
                <div className="absolute w-14 h-14 group-hover:bg-black/20 rounded-full transition-all duration-300 ease-in-out z-20">
                  &nbsp;
                </div>
                <a
                  href="https://www.linkedin.com/in/skerelian/"
                  title="Visit Sarkis' LinkedIn"
                  className="z-50"
                >
                  <img
                    className="w-[2.2rem]"
                    src={LinkedInIcon}
                    alt="LinkedIn"
                  />
                </a>
              </span>
              <span className="group flex justify-center items-center">
                <div className="absolute w-14 h-14 group-hover:bg-black/20 rounded-full transition-all duration-300 ease-in-out z-20">
                  &nbsp;
                </div>
                <a
                  href="mailto:skerelian@gmail.com"
                  target="_blank"
                  title="Email Sarkis"
                  className="z-50"
                >
                  <img className="w-10" src={EmailIcon} alt="Email me" />
                </a>
              </span>
              <span className="group flex justify-center items-center">
                <div className="absolute w-14 h-14 group-hover:bg-black/20 rounded-full transition-all duration-300 ease-in-out z-20">
                  &nbsp;
                </div>
                <a
                  href="/files/SarkisK-Resume-wd-2025.pdf"
                  download="SarkisK-Resume-wd-2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Sarkis K. Resume download"
                  className="z-50"
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: '2.2rem' }}
                  >
                    file_save
                  </span>
                </a>
              </span>
            </div>
          </div>
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
