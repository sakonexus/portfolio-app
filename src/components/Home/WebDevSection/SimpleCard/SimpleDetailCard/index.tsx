const SimpleDetailCard = ({ title, body, modalOpen, toggle }) => {
  console.log('SimpleDetailCard', modalOpen);

  return (
    <div className={`text-left overflow-hidden w-full `}>
      <div
        className={`${modalOpen ? 'opacity-1' : 'opacity-0'}`}
        style={{
          transition: modalOpen ? 'opacity 1s ease-in' : 'opacity 0.25s linear',
        }}
      >
        <h3 className="font-semibold">{title}</h3>
        <p className="text-lg">{body}</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            toggle();
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SimpleDetailCard;
