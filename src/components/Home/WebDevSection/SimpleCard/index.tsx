interface SimpleCardProps {
  imgUrl: string;
  cardId: string;
  cardTitle: string;
  cardOnClick: (e: React.MouseEvent<HTMLImageElement>) => void;
  index: number;
}

const SimpleCard = ({ imgUrl, cardId, cardTitle, cardOnClick, index }: SimpleCardProps) => {
  return (
    <div
      key={`${index}-${cardId}`}
      className={`relative mb-16 group hover:cursor-pointer hover:shadow-link transition-all duration-300 rounded-xl`}
    >
      <div
        className={`flex flex-col justify-center items-center w-32 xl:w-full`}
      >
        <div
          className={`rounded-xl w-full h-full lg:w-52 lg:h-52 ${
            index == 4 ? 'xl:self-end' : index == 5 ? 'xl:self-start' : ''
          }`}
        >
          <div className="relative z-20 w-36 h-36 lg:w-52 lg:h-52 overflow-hidden rounded-xl">
            <img
              id={cardId}
              onClick={(e) => {
                cardOnClick(e);
              }}
              className="absolute w-full h-full object-cover"
              src={imgUrl}
              alt={cardTitle}
            />
          </div>
          <div
            className={`mt-1 text-center font-semibold text-white tracking-wider leading-tight`}
          >
            {cardTitle}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleCard;
