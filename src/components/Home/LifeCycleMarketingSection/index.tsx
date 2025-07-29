import EmailCard from './EmailCard';
import responsysLogo from '../../../../public/images/i/email/responsys-logo.svg';
import iterableLogo from '../../../../public/images/i/email/iterable-inc-logo-vector.svg';
import sfmcLogo from '../../../../public/images/i/email/salesforce-marketing-cloud-logo.svg';
import mcLogo from '../../../../public/images/i/email/mailchimp-logo.svg';
import paperPlaneImg from './assets/paper-plane.svg';
import marketingImage from './assets/marketing-image.svg';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import { useModal } from '@/hooks/use-modal.jsx';
import { RefObject, useEffect, useState } from 'react';
import EmailCardDetails from './EmailCardDetails';
import { getEmailCards } from '@/api/sanity-client';
import { TypedObject } from 'sanity';

const logoArray = [
  {
    iconName: 'Responsys',
    iconPath: responsysLogo,
  },
  {
    iconName: 'Iterable',
    iconPath: iterableLogo,
  },
  {
    iconName: 'Salesforce Marketing Cloud',
    iconPath: sfmcLogo,
  },
  {
    iconName: 'Mailchimp',
    iconPath: mcLogo,
  },
];

export interface EmailCardDataProps {
  cardBody: TypedObject | TypedObject[];
  cardTitle: string;
  githubUrl: string;
  githubCodeUrl: string;
  id: string;
  _key: string;
}

const LifeCycleMarketingSection = ({ section2 }: {section2: RefObject<HTMLDivElement>}) => {
  const { height, width, widthSize } = useWindowDimensions();
  const [cardData, setCardData] = useState<null | Array<EmailCardDataProps>>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [assignModal, setAssignModal] = useState<React.ReactElement>(
    <EmailCardDetails
      modalOpen={false}
      setModalOpen={() => {}}
      cardData={{
        cardBody: [
          { children: [], markDefs: [], _key: '', _type: '', style: 'normal' },
        ],
        cardTitle: '',
        githubUrl: '',
        githubCodeUrl: '',
        id: '',
        _key: '',
      }}
    />
  );

  const { modalOpen, setModalOpen, toggle, modalElement } =
    useModal(assignModal);

  useEffect(() => {
    getEmailCards().then((data) => {
      if (data) {
        setCardData(data[0].cards);
        setLoading(false);
        console.log('email data', data);
      }
    });
  }, []);

  const emailCardSelect = (
    e: React.MouseEvent<HTMLElement>,
    emailCardData: EmailCardDataProps
  ) => {
    e.preventDefault();
    setAssignModal(
      <EmailCardDetails
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        cardData={emailCardData}
      />
    );

    toggle();
  };

  return (
    <div
      ref={section2}
      id="dme"
      className={`relative w-full min-h-screen flex flex-col items-center bg-[url('./assets/paper-plane.svg')] overflow-visible z-[60]`}
      style={
        widthSize == 'xl'
          ? {
              backgroundImage: `url(${paperPlaneImg})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'top 75% right 1rem',
              backgroundSize: '30%',
              transition: 'background-position 500ms ease-in',
            }
          : widthSize == 'md'
            ? {
                backgroundImage: `url(${paperPlaneImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top 75% right 1rem',
                backgroundSize: '30%',
                transition: 'background-position 500ms ease-in',
              }
            : {
                backgroundImage: `url(${paperPlaneImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top 1.5rem right 1.5rem',
                backgroundSize: '50%',
                transition:
                  'background-position 500ms ease-in, background-size 500ms ease-in',
              }
      }
    >
      <div className="w-full flex flex-col px-8 lg:px-0 lg:w-8/12">
        <div className="relative z-10">
          <h1
            className={`font-semibold text-black text-5xl lg:text-7xl/normal`}
          >
            Lifecycle <br className="visible lg:hidden" />
            Marketing
          </h1>
          <div className="flex flex-col xl:flex-row">
            <div className="w-full xl:w-2/3 bg-white">
              <p className="text-2xl text-black my-4 xl:mt-8 xl:text-4xl">
                Hands-on experience with email and SMS strategy, development,
                and deliverability across several email sending platforms.
              </p>
            </div>
            <div className="relative flex my-4 z-50 w-full xl:-right-36 xl:w-[30rem] xl:absolute xl:mt-0 xl:top-0">
              <img
                className="w-full"
                src={marketingImage}
                alt="marketing image"
              />
            </div>
          </div>
        </div>
        <div className="relative mt-16 flex flex-row flex-nowrap justify-center xl:mt-14">
          <h2 className="absolute z-20 top-[-40px] bg-green-800/70 rounded rounded-tr-xl rounded-tl-xl p-4 text-2xl font-semibold text-white text-center xl:text-3xl">
            Platforms
          </h2>
          <div className="w-full relative z-10 flex flex-row flex-nowrap bg-green-800/50 rounded-xl pt-4 pb-4 overflow-x-auto items-stretch scrollbar-hide md:justify-start xl:justify-center">
            {logoArray.map((icon) => {
              return (
                <div className="flex flex-col shrink-0 justify-end items-center mx-4">
                  <img className="w-16 mt-4 xl:w-28" src={icon.iconPath} />
                  <p className="text-center font-semibold pt-2">
                    {icon.iconName}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-14">
          <h3 className="font-semibold text-4xl">Email Dev Work</h3>
        </div>
        <div className="flex flex-wrap justify-center items-center mt-4 mb-24">
          {!loading &&
            cardData &&
            cardData.map((emailCardData) => {
              return (
                <EmailCard cardData={emailCardData} onClick={emailCardSelect} />
              );
            })}
        </div>
      </div>
      {modalElement}
    </div>
  );
};

export default LifeCycleMarketingSection;
