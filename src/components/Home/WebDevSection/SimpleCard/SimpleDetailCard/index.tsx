import AnchorLink from '@/components/AnchorLink';
import { PortableText } from '@portabletext/react';
import { TypedObject } from 'sanity';
import ModalContainer from '@/components/Modal/ModalContainer';

interface SimpleDetailCardProps {
  title: string;
  body: TypedObject | TypedObject[];
  modalOpen: boolean;
  setModalOpen: (arg0: boolean) => void;
  imagePath?: string;
  imageUrl: string;
  cardUrl: string;
}

const SimpleDetailCard = ({
  title,
  body,
  modalOpen,
  setModalOpen,
  imageUrl,
  cardUrl,
}: SimpleDetailCardProps) => {
  return (
    <ModalContainer modalOpen={modalOpen}>
      <div
        className={`text-left w-full flex flex-col justify-center py-8 px-4 lg:py-12 lg:px-8`}
      >
        <div className="w-full flex justify-center sm:flex-col lg:flex-row sm:mt-8">
          <div className=" relative lg:w-4/12">
            <img
              className={`w-full drop-shadow-lg shadow-md shadow-slate-300 rounded-xl ${
                modalOpen ? 'opacity-100' : 'opacity-0'
              }`}
              src={imageUrl}
              alt={title}
              style={{
                transition: modalOpen
                  ? 'opacity 1s ease-out 200ms'
                  : 'opacity 0.1s linear',
              }}
            />
            <div
              style={{
                transition: modalOpen
                  ? 'opacity 1s ease-out 500ms'
                  : 'opacity 0.1s linear',
              }}
              className={`mt-6 sm:text-center ${
                modalOpen ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <AnchorLink
                classList={`block cursor-pointer text-blue-600 text-2xl font-semibold `}
                url={cardUrl}
                text="Visit"
              />
            </div>
          </div>
          <div className="sm:w-full lg:w-8/12 lg:pl-12 ">
            <div
              className={` sm:text-center sm:mt-4 lg:text-left ${
                modalOpen ? 'opacity-1' : 'opacity-0'
              }`}
              style={{
                transition: modalOpen
                  ? 'opacity 1s ease-in'
                  : 'opacity 0.25s linear',
              }}
            >
              <h3
                className={`font-bold text-4xl ${
                  modalOpen ? 'opacity-1' : 'opacity-0'
                }`}
                style={{
                  transition: modalOpen
                    ? 'opacity 1s ease-out 400ms'
                    : 'opacity 0.1s linear',
                }}
              >
                {title}
              </h3>
              <div
                className={`text-xl pt-8 sm:pt-4 ${
                  modalOpen ? 'opacity-1' : 'opacity-0'
                }`}
                style={{
                  transition: modalOpen
                    ? 'opacity 1s ease-out 900ms'
                    : 'opacity 0.1s linear',
                }}
              >
                <PortableText value={body} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 mt-4 mr-4 scale-75 xl:mt-8 xl:mr-8">
          <button
            onClick={(e) => {
              e.preventDefault();
              setModalOpen(false);
            }}
          >
            <div
              className={`close-button ${
                modalOpen ? 'opacity-1' : 'opacity-0'
              }`}
              style={{
                transition: modalOpen
                  ? 'opacity 1s ease-out 300ms'
                  : 'opacity 0.1s linear',
              }}
            ></div>
          </button>
        </div>
      </div>
    </ModalContainer>
  );
};

export default SimpleDetailCard;
