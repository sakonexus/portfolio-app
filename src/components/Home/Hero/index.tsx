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
      className="bg-gradient-to-b from-sky-600 from-60% to-indigo-600 w-full h-screen flex justify-center items-center"
    >
      <div className="flex w-9/12 items-center">
        <div className="w-1/2 flex align-top flex-col">
          <div className="w-full text-left text-7xl font-semibold">
            Hi, I'm Sarkis!
          </div>
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
        <div className="w-1/2">
          <img
            className="rounded-full shadow-2xl w-full"
            src={profilePic}
            alt="That's me!"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
