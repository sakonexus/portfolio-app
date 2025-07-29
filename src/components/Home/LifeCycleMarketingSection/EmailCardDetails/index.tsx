import ModalContainer from '@/components/Modal/ModalContainer';
import AnchorLink from '@/components/AnchorLink';
import { PortableText } from '@portabletext/react';
import { EmailCardDataProps } from '..';

interface EmailCardDetailsProps {
  modalOpen: boolean;
  setModalOpen: (arg0: boolean) => void;
  cardData: EmailCardDataProps;
}

const EmailCardDetails = ({
  modalOpen,
  setModalOpen,
  cardData,
}: EmailCardDetailsProps) => {
  return (
    <ModalContainer modalOpen={modalOpen}>
      <div
        className={`text-left w-full flex flex-col justify-center py-8 px-4 lg:px-8`}
      >
        <div className="flex justify-end items-center">
        <button
          onClick={(e) => {
            e.preventDefault();
            setModalOpen(false);
          }}
          className='hover:bg-black/20 rounded-full p-2 transition-all duration-300 w-16 h-16 hover:cursor-pointer'
        >
          <span className={`material-icons sm:!text-4xl lg:!text-5xl ${
            modalOpen ? 'opacity-100' : 'opacity-0'
          }`} 
          style={{
            transition: modalOpen
              ? 'opacity 1s ease-out 300ms'
              : 'opacity 0.1s linear',
          }}>close</span>
        </button>
      </div>
        <div className="w-full flex justify-center sm:flex-col">
          <div className="w-full lg:pl-12 ">
            <div
              className={` sm:text-center sm:mt-4 ${
                modalOpen ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transition: modalOpen
                  ? 'opacity 1s ease-in'
                  : 'opacity 0.25s linear',
              }}
            >
              <h3
                className={`font-bold text-4xl ${
                  modalOpen ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  transition: modalOpen
                    ? 'opacity 1s ease-out 400ms'
                    : 'opacity 0.1s linear',
                }}
              >
                {cardData.cardTitle}
              </h3>
              <div
                className={`text-xl pt-8 sm:pt-4 ${
                  modalOpen ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  transition: modalOpen
                    ? 'opacity 1s ease-out 900ms'
                    : 'opacity 0.1s linear',
                }}
              >
                <PortableText value={cardData.cardBody} />
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <div
              style={{
                transition: modalOpen
                  ? 'opacity 1s ease-out 500ms'
                  : 'opacity 0.1s linear',
              }}
              className={`flex flex-col mt-6 text-center ${
                modalOpen ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="flex flex-row items-center justify-center">
                <AnchorLink
                  classList={`flex cursor-pointer text-blue-600 text-2xl font-semibold items-center`}
                  url={cardData.githubUrl}
                  text="View in Browser"
                  icon={<span className="material-icons">open_in_new</span>}
                />
              </div>
              <div className="flex flex-row items-center justify-center pt-2">
                <AnchorLink
                  classList={`flex cursor-pointer text-blue-600 text-2xl font-semibold items-center`}
                  url={cardData.githubCodeUrl}
                  text="View Code"
                  icon={<span className="material-icons">open_in_new</span>}
                />
              </div>
            </div>
          </div>
          <div className="overflow-hidden border-t-2 border-gray-400 mt-8">
            <iframe className="w-full h-[40rem]" src={cardData.githubUrl} />
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default EmailCardDetails;
