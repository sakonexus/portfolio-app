interface SpinnerProps {
  size?: string;
}

const Spinner = ({ size }: SpinnerProps) => {
  let widthAndHeight = '';

  switch (size) {
    case 'sm':
      widthAndHeight = 'w-12 h-12';
      break;
    case 'md':
      widthAndHeight = 'w-16 h-16';
      break;
    case 'lg':
      widthAndHeight = 'w-32 h-32';
      break;
    default:
      widthAndHeight = 'w-16 h-16';
  }

  return (
    <div className={widthAndHeight}>
      <svg
        className="animate-spin w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="#2495ff"
          d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
          opacity={0.3}
        ></path>
        <path
          fill="#2495ff"
          d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z"
        ></path>
      </svg>
    </div>
  );
};

export default Spinner;
