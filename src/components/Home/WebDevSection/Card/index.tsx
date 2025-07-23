import { useState } from 'react';

const Card = ({
  parentElementInView,
  cardImage,
  cardTitle,
  cardId,
  selectedCard,
  setSelectedCard,
  setCardDimensions,
  cardDimensions,
  cardIndex,
}) => {
  const selectCardOnClick = (e) => {
    e.preventDefault();

    // console.log('e.target.classList', e.target.classList);

    setSelectedCard(cardId);

    setCardDimensions(e.target.getBoundingClientRect());
  };

  console.log('cardDimensions', cardDimensions);

  return (
    <div
      id={`wd-cards-container-${cardId}`}
      onClick={(e) => selectCardOnClick(e)}
      className={`flex shrink-0 grow-0 transition-transform`}
    >
      <div className="w-full flex flex-col">
        <div className="mt-4 mb-2 flex flex-row items-center">
          <div className="w-16 h-16 mr-4">
            <img
              id={cardId}
              className={`aspect-square rounded-xl w-full h-full`}
              src={cardImage}
            />
          </div>
          <h2 className="text-white font-semibold text-4xl">{cardTitle}</h2>
        </div>
        <div className="w-full bg-white">test</div>
      </div>
    </div>
  );
};

export default Card;
