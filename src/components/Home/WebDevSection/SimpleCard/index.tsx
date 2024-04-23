import React, { useState } from 'react';

const SimpleCard = ({ imgPath, cardId, cardOnClick }) => {
  return (
    <div className="relative mr-8 mb-8">
      <div className="w-64 h-64 rounded-xl">
        <div className="relative w-64 h-64 rounded-xl z-20">
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
    </div>
  );
};

export default SimpleCard;
