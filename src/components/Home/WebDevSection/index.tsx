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
import { useModal } from '@/hooks/use-modal.jsx';

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
      iconPath: nextjsImg,
      iconId: 'nextjs',
      iconName: 'NextJS',
    },
    {
      iconPath: mongoDBImg,
      iconId: 'mongodb',
      iconName: 'MongoDB',
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
      cardBody:
        'The trick book allows users to search for various tricks and provides a video with description informing them how to perform the trick.',
      cardDescription:
        'trick-book description. this one is longer in order to see how the functionality of the modal works when given more text. i should probably concat this at some point to avoid too much info being shown immediately.',
      cardUrl: 'https://www.scratchskating.com/skate-academy/trick-book',
    },
    {
      id: 'skate-game',
      cardImage: skateGameImg,
      cardTitle: 'Game of Skate',
      cardBody: 'Game of skate copy',
      cardDescription: 'skate-game description',
      cardUrl: 'https://www.scratchskating.com/skate-game',
    },
    {
      id: 'board-anatomy',
      cardImage: boardAnatomyImg,
      cardTitle: 'Skateboard Anatomy',
      cardBody: 'Skateboard Anatomy copy',
      cardDescription: 'skate-game description',
      cardUrl:
        'https://www.scratchskating.com/skate-academy/skateboard-anatomy',
    },
    {
      id: 'skate-101',
      cardImage: obstaclesImg,
      cardTitle: 'Skateboarding 101',
      cardBody: 'Skateboarding 101 copy',
      cardDescription: 'skate-101 description',
      cardUrl: 'https://www.scratchskating.com/skate-academy/basics',
    },
    {
      id: 'trick-gen',
      cardImage: trickGenImg,
      cardTitle: 'Trick Generator',
      cardBody: 'Trick Generator copy',
      cardDescription: 'trick-gen description',
      cardUrl: 'https://www.scratchskating.com/skate-academy/trick-generator',
    },
  ],
};

const WebDevSection = ({ section1 }) => {
  const { elementInView } = useElementInView(section1);
  const [sectionDividerHeight, setSectionDividerHeight] = useState(0);
  const [assignModal, setAssignModal] = useState<React.ReactElement>(
    <SimpleDetailCard
      title=""
      body=""
      modalOpen={false}
      toggle={() => false}
      cardDescription=""
      cardUrl=""
    />
  );

  const { modalOpen, setModalOpen, toggle, modalElement } =
    useModal(assignModal);

  const cardOnClick = (e) => {
    e.preventDefault();
    const cardId = e.target.id;

    cardDetails.cards.map((item) => {
      if (cardId === item.id) {
        setAssignModal(
          <SimpleDetailCard
            title={item.cardTitle}
            body={item.cardBody}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            imagePath={trickBookImg}
            cardDescription={item.cardDescription}
            cardUrl={item.cardUrl}
          />
        );
      }
    });

    toggle();
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
      <div className="lg:w-8/12 sm:w-full">
        <div className="flex flex-col w-full sm:px-8 lg:px-0">
          <div className="relative z-10">
            <h1
              className={`font-semibold text-white leading-tight sm:text-5xl lg:text-7xl`}
            >
              Scratch Skating
            </h1>
            <p className="text-xl text-white my-8">
              Scratch Skating<sup>&trade;</sup> was built with one goal in mind:
              to bring new skaters up to speed with the ins and outs of
              skateboarding. This was my passion project which took me over a
              year to develop. It was my first true project that I worked on
              after learning the basics of coding with React. After watching
              several tutorials and building mundane to-do lists, I took this on
              to challenge myself and learn how to code at a fundamental level.
              It's far from perfect, but it's my first app that I developed from
              ground up and was able to publish for the masses.
            </p>
          </div>
          <div className="relative mt-14 flex flex-row flex-nowrap justify-center">
            <h2 className="absolute z-20 top-[-40px] bg-emerald-700 bg-opacity-70 rounded rounded-tr-xl rounded-tl-xl p-4 text-3xl font-semibold text-white text-center">
              Tech Stack
            </h2>
            <div className="relative z-10 flex flex-row flex-nowrap bg-opacity-50 bg-white rounded-xl pb-4 overflow-x-auto items-stretch scrollbar-hide md:justify-start xl:justify-center">
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
        </div>
        <div className="w-full flex-col mt-12 sm:px-8 lg:px-0">
          <h3 className="text-white font-semibold pb-4 sm:text-3xl lg:text-5xl">
            Features
          </h3>
          <div className="relative flex flex-row items-center lg:flex-nowrap sm:flex-wrap sm:justify-center lg:justify-between">
            {cardDetails.cards.map((item) => {
              return (
                <SimpleCard
                  imgPath={item.cardImage}
                  cardId={item.id}
                  cardOnClick={cardOnClick}
                  cardTitle={item.cardTitle}
                  setModalOpen={setModalOpen}
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
      {modalElement}
    </div>
  );
};

export default WebDevSection;
