import GithubIcon from '/public/icons/github-icon.svg';
import LinkedInIcon from '/public/icons/linkedin-icon.svg';
import EmailIcon from '/public/icons/envelope-icon.svg';

const ContactModule = () => {
  return (
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
          <img className="w-[2.4rem]" src={GithubIcon} alt="Github" />
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
          <img className="w-[2.4rem]" src={LinkedInIcon} alt="LinkedIn" />
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
  );
};

export default ContactModule;
