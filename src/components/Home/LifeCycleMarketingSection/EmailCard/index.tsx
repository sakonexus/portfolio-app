import { EmailCardDataProps } from '..';

const EmailCard = ({
  onClick,
  cardData,
}: {
  onClick: (
    event: React.MouseEvent<HTMLDivElement>,
    cardData: EmailCardDataProps
  ) => void;
  cardData: EmailCardDataProps;
}) => {
  return (
    <div
      className="w-full flex flex-col xl:w-1/2 cursor-pointer"
      onClick={(e) => onClick(e, cardData)}
    >
      <div className="bg-gradient-to-tr from-indigo-600 to-green-600 p-3 mb-8 rounded-xl xl:mx-2">
        <div className="w-full bg-white rounded-xl text-center">
          <div className="py-4 px-2 shadow drop-shadow-lg">
            <h2 className="font-bold text-3xl pt-4">{cardData.cardTitle}</h2>
          </div>
          <div className="overflow-hidden">
            <iframe className="w-full h-[32rem]" src={cardData.githubUrl} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailCard;
