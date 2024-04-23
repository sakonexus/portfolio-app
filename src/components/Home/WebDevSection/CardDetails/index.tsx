const CardDetails = ({
  icons,
  header,
  body,
  cardId,
  selectedCard,
  cardDimensions,
}) => {
  console.log('cardDimensions', cardDimensions);
  return (
    <div
      key={cardId}
      className={`absolute p-8 bg-white text-black rounded-xl shadow-md shadow-slate-1000 transition-all duration-1000 ${
        selectedCard == cardId ? 'opacity-1  scale-1 ' : `opacity-0  scale-0 `
      }`}
      style={
        selectedCard === cardId && cardDimensions
          ? { transform: `translate(0, 0)` }
          : {
              transform: `translate(0, -300px)`,
            }
      }
    >
      <div className="flex flex-col relative w-full">
        <div className="flex">
          {icons.map((icon) => {
            return (
              <div key={icon.iconId} className="w-24 h-24 flex justify-center">
                <img
                  className="block w-full h-auto"
                  src={icon.iconPath}
                  alt={icon.iconName}
                />
              </div>
            );
          })}
        </div>
        <div>
          <h3 className="text-3xl font-semibold">{header}</h3>
        </div>
        <div className="pt-4">{body}</div>
      </div>
    </div>
  );
};

export default CardDetails;
