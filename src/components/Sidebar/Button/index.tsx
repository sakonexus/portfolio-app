import { HashLink as Link } from 'react-router-hash-link';

const Button = ({
  title,
  elementId,
  containerClasses,
  buttonId,
}: {
  title: string;
  elementId: string;
  containerClasses?: string;
  buttonId: string;
}) => {
  return (
    <Link
      className={`${containerClasses ? containerClasses : ''} text-center`}
      smooth
      to={`/#${elementId}`}
    >
      <button
        id={buttonId}
        className="text-white text-lg rounded-full py-4 px-6 ease-in-out hover:shadow-link transition-all duration-300"
        aria-label={`${title} navigation button`}
      >
        {title}
      </button>
    </Link>
  );
};

export default Button;
