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
    <div className={`${containerClasses ? containerClasses : ''} text-center`}>
      <Link smooth to={`/#${elementId}`}>
        <button
          id={buttonId}
          className="text-white text-lg rounded-full py-4 px-6 transition-shadow ease-in-out"
        >
          {title}
        </button>
      </Link>
    </div>
  );
};

export default Button;
