import React, { useState } from 'react';

const SimpleCard = ({ imgPath, cardId, cardTitle, cardOnClick, index }) => {
  return (
    <div
      key={`${index}-${cardId}`}
      className={`mx-6 relative mb-16 w-1/3 xl:flex-1 xl:w-1/4 `}
    >
      <div
        className={`flex flex-col justify-center items-center w-32 xl:w-full`}
      >
        <div
          className={`rounded-xl w-full h-full lg:w-52 lg:h-52 ${
            index == 4 ? 'xl:self-end' : index == 5 ? 'xl:self-start' : ''
          }`}
        >
          <div className="relative z-20">
            <img
              id={cardId}
              onClick={(e) => {
                cardOnClick(e);
              }}
              className="w-full h-full rounded-xl"
              src={imgPath}
              alt=""
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
