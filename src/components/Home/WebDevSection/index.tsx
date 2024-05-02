import { useState, useEffect } from 'react';
import WebDevSectionDivider from '../WebDevSection/Divider';
import { useElementInView } from '@hooks/element-in-view.js';
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
import { getWebDevCards, getImageUrl } from '@/api/sanity-client.js';
import Spinner from '@/components/Spinner/index.js';

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
};

interface WebDevCardDataProps {
  cardBody: string;
  cardDescription: string;
  cardImage: {
    asset: {
      _ref: string;
      _type: string;
    };
    _type: string;
  };
  cardTitle: string;
  cardUrl: string;
  id: string;
  _key: string;
}

const WebDevSection = ({ section1 }) => {
  const [cardData, setCardData] = useState<null | Array<WebDevCardDataProps>>(
    null
  );
  const [loading, setLoading] = useState(true);
  const { elementInView } = useElementInView(section1);
  const [sectionDividerHeight, setSectionDividerHeight] = useState(0);
  const [assignModal, setAssignModal] = useState<React.ReactElement>(
    <SimpleDetailCard
      title=""
      body=""
      modalOpen={false}
      cardDescription=""
      cardUrl=""
      setModalOpen={() => false}
      imageUrl=""
    />
  );

  const { modalOpen, setModalOpen, toggle, modalElement } =
    useModal(assignModal);

  const cardOnClick = (e) => {
    e.preventDefault();
    const cardId = e.target.id;

    cardData &&
      cardData.length > 0 &&
      cardData.map((item) => {
        if (cardId === item.id) {
          setAssignModal(
            <SimpleDetailCard
              title={item.cardTitle}
              body={item.cardBody}
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              imageUrl={getImageUrl(item.cardImage.asset._ref)}
              cardDescription={item.cardDescription}
              cardUrl={item.cardUrl}
            />
          );
        }
      });

    toggle();
  };

  useEffect(() => {
    getWebDevCards().then((data) => {
      if (data) {
        setCardData(data[0].cards);
        setLoading(false);
        console.log(data);
      }
    });
  }, []);

  return (
    <div
      ref={section1}
      id="wde"
      className="relative bg-indigo-600 w-full min-h-screen flex flex-col items-center"
      style={{
        paddingBottom: `${sectionDividerHeight}px`,
      }}
    >
      <div className="w-full lg:w-8/12">
        <div className="flex flex-col w-full px-8 lg:px-0">
          <div className="relative z-10">
            <h1
              className={`font-semibold text-white leading-tight text-5xl lg:text-7xl`}
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
            <h2 className="absolute z-20 top-[-40px] bg-emerald-700 bg-opacity-70 rounded rounded-tr-xl rounded-tl-xl p-4 text-2xl font-semibold text-white text-center xl:text-3xl">
              Tech Stack
            </h2>
            <div className="relative z-10 flex flex-row flex-nowrap bg-opacity-50 bg-white rounded-xl pt-4 pb-4 overflow-x-auto items-stretch scrollbar-hide md:justify-start xl:justify-center">
              {cardDetails.icons.map((icon) => {
                return (
                  <div className="flex flex-col flex-shrink-0 justify-end items-center mx-4">
                    <img className="w-16 mt-4 xl:w-20" src={icon.iconPath} />
                    <p className="text-center font-semibold">{icon.iconName}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full flex-col mt-12 px-8 lg:px-0">
          <h3 className="text-white font-semibold pb-4 text-3xl lg:text-5xl">
            Features
          </h3>
          <div className="relative flex flex-row items-start flex-wrap justify-center">
            {cardData && cardData.length > 0 && !loading ? (
              cardData.map((item, index) => {
                return (
                  <SimpleCard
                    imgUrl={getImageUrl(item.cardImage.asset._ref)}
                    cardId={item.id}
                    cardOnClick={cardOnClick}
                    cardTitle={item.cardTitle}
                    index={index}
                  />
                );
              })
            ) : (
              <Spinner size="lg" />
            )}
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
