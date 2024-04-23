import { useState } from 'react';
import WebDevSectionDivider from '../WebDevSection/Divider';
import { useElementInView } from '../../../hooks/element-in-view.js';
import trickBookImg from '@public/images/i/wd-examples/trick-book.png';
import skateGameImg from '@public/images/i/wd-examples/skate-game.png';
import boardAnatomyImg from '@public/images/i/wd-examples/skateboard-anatomy.png';
import obstaclesImg from '@public/images/i/wd-examples/skate-obstacles.png';
import trickGenImg from '@public/images/i/wd-examples/trick-gen.png';
import mongoDBImg from '../../../../public/images/i/wd-examples/icons/mongodb.svg';
import cssImg from '../../../../public/images/i/wd-examples/icons/css3.svg';
import htmlImg from '../../../../public/images/i/wd-examples/icons/html5.svg';
import tslImg from '../../../../public/images/i/wd-examples/icons/typescript.svg';
import reactlImg from '../../../../public/images/i/wd-examples/icons/react.svg';
import nextjsImg from '../../../../public/images/i/wd-examples/icons/nextjs.svg';
import bsImg from '../../../../public/images/i/wd-examples/icons/bootstrap.svg';
import scImg from '../../../../public/images/i/wd-examples/icons/styled-components.png';
import SimpleCard from './SimpleCard';
import SimpleDetailCard from './SimpleCard/SimpleDetailCard/index.js';

const cardDetails = {
  icons: [
    {
      iconPath: htmlImg,
      iconId: 'html',
      iconName: 'HTML',
    },
    {
      iconPath: cssImg,
      iconId: 'css',
      iconName: 'CSS',
    },
    {
      iconPath: tslImg,
      iconId: 'typescript',
      iconName: 'TypeScript',
    },
    {
      iconPath: reactlImg,
      iconId: 'react',
      iconName: 'React',
    },
    {
      iconPath: mongoDBImg,
      iconId: 'mongodb',
      iconName: 'MongoDB',
    },
    {
      iconPath: nextjsImg,
      iconId: 'nextjs',
      iconName: 'NextJS',
    },
    {
      iconPath: bsImg,
      iconId: 'bootstrap',
      iconName: 'Bootstrap',
    },
    {
      iconPath: scImg,
      iconId: 'style-components',
      iconName: 'Styled Components',
    },
  ],
  cards: [
    {
      id: 'trick-book',
      cardImage: trickBookImg,
      cardTitle: 'Trick Book',
      cardBody: 'This is Scratch Skating.',
    },
    {
      id: 'skate-game',
      cardImage: skateGameImg,
      cardTitle: 'Game of Skate',
      cardBody: 'Game of skate copy',
    },
    {
      id: 'board-anatomy',
      cardImage: boardAnatomyImg,
      cardTitle: 'Skateboard Anatomy',
      cardBody: 'Skateboard Anatomy copy',
    },
    {
      id: 'skate-101',
      cardImage: obstaclesImg,
      cardTitle: 'Skateboarding 101',
      cardBody: 'Skateboarding 101 copy',
    },
    {
      id: 'trick-gen',
      cardImage: trickGenImg,
      cardTitle: 'Trick Generator',
      cardBody: 'Trick Generator copy',
    },
  ],
};

const WebDevSection = ({ section1 }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const { elementInView } = useElementInView(section1);
  const [sectionDividerHeight, setSectionDividerHeight] = useState(0);

  const cardOnClick = (e) => {
    e.preventDefault();

    const cardId = e.target.id;

    selectedCard == cardId ? setSelectedCard(null) : setSelectedCard(cardId);
  };

  return (
    <div
      ref={section1}
      id="wde"
      className="relative bg-indigo-600 w-full min-h-screen flex flex-col items-center"
      style={{
        paddingBottom: `${sectionDividerHeight}px`,
      }}
    >
      <div className="w-8/12">
        <div className="flex flex-col w-full">
          <div className="relative">
            <h1 className={`font-semibold text-white text-7xl leading-tight`}>
              Scratch Skating
            </h1>
            <p className="text-xl text-white mt-4">
              This is where I put stuff about the Scratch Skating web app
            </p>
          </div>
          <div className="w-full flex justify-center h-0">
            <h2 className="absolute top-[9.4rem] bg-emerald-600 bg-opacity-70 rounded rounded-tr-xl rounded-tl-xl p-4 text-3xl font-semibold text-white text-center mr-8">
              Tech Stack
            </h2>
          </div>
          <div className="mt-14 flex flex-row flex-nowrap bg-opacity-50 bg-white rounded-xl pb-4 overflow-x-auto items-stretch scrollbar-hide lg:justify-start xl:justify-center">
            {cardDetails.icons.map((icon) => {
              return (
                <div className="flex flex-col flex-shrink-0 justify-end items-center mx-4">
                  <img className="w-24 mt-4" src={icon.iconPath} />
                  <p className="text-center font-semibold">{icon.iconName}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full flex-col mt-12">
          <div className="relative flex flex-row flex-wrap justify-center items-center">
            {cardDetails.cards.map((item) => {
              return (
                <SimpleCard
                  imgPath={item.cardImage}
                  cardId={item.id}
                  cardOnClick={cardOnClick}
                />
              );
            })}
          </div>
          <div className="relative mt-8">
            {cardDetails.cards.map((item) => {
              return (
                <SimpleDetailCard
                  title={item.cardTitle}
                  body={item.cardBody}
                  cardId={item.id}
                  selectedCard={selectedCard}
                />
              );
            })}
          </div>
        </div>
      </div>
      <WebDevSectionDivider
        parentRef={section1}
        setSectionDividerHeight={setSectionDividerHeight}
      />
    </div>
  );
};

export default WebDevSection;
