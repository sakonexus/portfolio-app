import { useState, useEffect, RefObject } from 'react';
import WebDevSectionDivider from '../WebDevSection/Divider';
import mongoDBImg from '../../../../public/images/i/wd-examples/icons/mongodb.svg';
import tslImg from '../../../../public/images/i/wd-examples/icons/typescript.svg';
import nextjsImg from '../../../../public/images/i/wd-examples/icons/nextjs.svg';
import awsImg from '../../../../public/images/i/wd-examples/icons/aws-logo.svg';
import stripeImg from '../../../../public/images/i/wd-examples/icons/stripe-logo.svg';
import sanityImg from '../../../../public/images/i/wd-examples/icons/sanity-logo.svg';
import tailwindImg from '../../../../public/images/i/wd-examples/icons/tailwind-css.svg';
import SimpleCard from './SimpleCard';
import SimpleDetailCard from './SimpleCard/SimpleDetailCard/index.js';
import { useModal } from '@/hooks/use-modal.jsx';
import { getWebDevCards, getImageUrl } from '@/api/sanity-client.js';
import Spinner from '@/components/Spinner/index.js';
import { TypedObject } from 'sanity';

const cardDetails = {
  icons: [
    {
      iconPath: nextjsImg,
      iconId: 'nextjs',
      iconName: 'NextJS',
    },
    {
      iconPath: tslImg,
      iconId: 'typescript',
      iconName: 'TypeScript',
    },
    {
      iconPath: tailwindImg,
      iconId: 'tailwind',
      iconName: 'Tailwind CSS',
    },
    {
      iconPath: mongoDBImg,
      iconId: 'mongodb',
      iconName: 'MongoDB',
    },
    {
      iconPath: awsImg,
      iconId: 'aws',
      iconName: 'AWS',
    },
    {
      iconPath: stripeImg,
      iconId: 'stripe',
      iconName: 'Stripe',
    },
    {
      iconPath: sanityImg,
      iconId: 'sanity',
      iconName: 'Sanity CMS',
    },
  ],
};

interface WebDevCardDataProps {
  cardBody: TypedObject | TypedObject[];
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

const WebDevSection = ({
  webdevRef,
}: {
  webdevRef: RefObject<HTMLDivElement>;
}) => {
  const [cardData, setCardData] = useState<null | Array<WebDevCardDataProps>>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [sectionDividerHeight, setSectionDividerHeight] = useState(0);
  const [assignModal, setAssignModal] = useState<React.ReactElement>(
    <SimpleDetailCard
      title=""
      body={[{ _type: 'block' }]}
      modalOpen={false}
      cardUrl=""
      setModalOpen={() => false}
      imageUrl=""
    />
  );

  const { modalOpen, setModalOpen, toggle, modalElement } =
    useModal(assignModal);

  const cardOnClick = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    const cardId = (e.target as HTMLImageElement).id;

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
      }
    });
  }, []);

  return (
    <div
      ref={webdevRef}
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
            <p className="text-2xl text-white my-8 xl:text-3xl">
              Scratch Skating<sup>&trade;</sup> has been my passion project to
              contribute to the skateboard community and build on web
              development skills and have a deeper understanding of web
              technologies.
            </p>
          </div>
          <div className="relative mt-14 flex flex-row flex-nowrap justify-center">
            <h2 className="absolute z-20 top-[-40px] bg-emerald-700/70 rounded rounded-tr-xl rounded-tl-xl p-4 text-2xl font-semibold text-white text-center xl:text-3xl">
              Tech Stack
            </h2>
            <div className="relative z-10 flex flex-row flex-nowrap bg-white/50 rounded-xl pt-4 pb-4 overflow-x-auto items-stretch scrollbar-hide md:justify-start xl:justify-center">
              {cardDetails.icons.map((icon) => {
                return (
                  <div className="flex flex-col shrink-0 justify-end items-center mx-4">
                    <img className="w-16 mt-4 xl:w-20" src={icon.iconPath} />
                    <p className="text-center font-semibold">{icon.iconName}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full flex-col mt-12 sm:px-8 lg:px-0">
          <h3 className="text-white font-semibold pb-8 text-3xl lg:text-5xl">
            Learn more
          </h3>
          <div className="relative flex flex-row items-start flex-wrap justify-start sm:gap-x-16 lg:gap-x-24">
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
        parentRef={webdevRef}
        setSectionDividerHeight={setSectionDividerHeight}
      />
      {modalElement}
    </div>
  );
};

export default WebDevSection;
