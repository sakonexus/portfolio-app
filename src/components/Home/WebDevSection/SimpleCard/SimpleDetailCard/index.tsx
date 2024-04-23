const SimpleDetailCard = ({ title, body, selectedCard, cardId }) => {
  return (
    <div
      className={`bg-white rounded-xl text-left overflow-hidden w-full shadow-md shadow-slate-600 ${
        selectedCard == cardId ? 'p-8' : 'p-0'
      }`}
      style={{
        transition:
          'transform 1s ease-in, height 700ms ease-in, padding 700ms linear',
        height: selectedCard === cardId ? '400px' : '0',
      }}
    >
      <div
        className={`transition-opacity duration-500 delay-700 ${
          selectedCard == cardId ? 'opacity-1' : 'opacity-0'
        }`}
      >
        <h3 className="font-semibold">{title}test</h3>
        <p className="text-lg">{body}</p>
      </div>
    </div>
  );
};

export default SimpleDetailCard;
