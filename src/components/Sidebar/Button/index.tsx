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
          className="text-white text-lg rounded-3xl p-4 transition-shadow ease-in-out"
        >
          {title}
        </button>
      </Link>
    </div>
  );
};

export default Button;
