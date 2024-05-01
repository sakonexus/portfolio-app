import React, { useState } from 'react';

const SimpleCard = ({ imgPath, cardId, cardTitle, cardOnClick }) => {
  return (
    <div className="relative mb-8 sm:w-1/2 sm:px-2 lg:basis-1">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="rounded-xl sm:w-full sm:h-full lg:w-52 lg:h-52">
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
        </div>
        <div className="text-center font-semibold text-white tracking-wider">
          {cardTitle}
        </div>
      </div>
    </div>
  );
};

export default SimpleCard;
