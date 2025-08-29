import GithubIcon from '/public/icons/github-icon.svg';
import LinkedInIcon from '/public/icons/linkedin-icon.svg';
import MyIcon from '/public/icons/favicon.png';
import HappyIcon from '/public/icons/my-face-happy.png';

const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-blue-400 py-8 flex-col">
      <div className="flex flex-row justify-center items-center gap-x-8 sm:w-full lg:w-1/3">
        <div className="flex flex-row items-center group">
          <span className="w-14 h-14 drop-shadow-2xl relative">
            <img
              className="w-14 h-14 rounded-full absolute group-hover:hidden"
              src={MyIcon}
              alt="My face icon"
              title="My face"
            />
            <img
              className="w-14 h-14 rounded-full absolute hidden group-hover:block group-hover:-rotate-12"
              src={HappyIcon}
              alt="My happy face icon"
              title="My happy face"
            />
          </span>
          <p className="ml-2 font-semibold text-gray-900 text-lg leading-tight">
            Thanks for visiting
            <br /> my portfolio!
          </p>
        </div>
        <span className="w-12 h-12 bg-white rounded-full drop-shadow-2xl">
          <a
            style={{ textDecoration: 'none' }}
            href="https://github.com/sakonexus/portfolio-app"
            title="Visit Sarkis' GitHub"
            className="z-50"
          >
            <img className="w-12" src={GithubIcon} alt="Github icon" />
          </a>
        </span>
        <span className="w-12 h-12 bg-white rounded-full drop-shadow-2xl">
          <a
            href="https://www.linkedin.com/in/skerelian/"
            title="Visit Sarkis' LinkedIn"
            className="z-50"
          >
            <img className="w-12" src={LinkedInIcon} alt="LinkedIn icon" />
          </a>
        </span>
      </div>
      <div className="pt-4">
        <p className="font-semibold text-gray-900">
          Made with ❤️ in the Bay Area, CA.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
