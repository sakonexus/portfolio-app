import AnchorLink from '@/components/AnchorLink';

interface SimpleDetailCardProps {
  title: string;
  body: string;
  modalOpen: boolean;
  setModalOpen: (arg0: boolean) => void;
  imagePath?: string;
  cardDescription: string;
  cardUrl: string;
}

const SimpleDetailCard = ({
  title,
  body,
  modalOpen,
  setModalOpen,
  imagePath,
  cardDescription,
  cardUrl,
}: SimpleDetailCardProps) => {
  return (
    <div
      className={`text-left w-full flex flex-col justify-center py-8 px-4 lg:py-12 lg:px-8`}
    >
      <div className="w-full flex justify-center sm:flex-col lg:flex-row sm:mt-8">
        <div className=" relative lg:w-4/12">
          <img
            className={`w-full drop-shadow-lg shadow-md shadow-slate-300 rounded-xl ${
              modalOpen ? 'opacity-100' : 'opacity-0'
            }`}
            src={imagePath}
            alt={title}
            style={{
              transition: modalOpen
                ? 'opacity 1s ease-out 400ms'
                : 'opacity 0.1s linear',
            }}
          />
          <div className="mt-6 sm:text-center">
            <AnchorLink url={cardUrl} text={`Visit ${title}`} />
            {/* <a
              className={`block cursor-pointer text-blue-600 text-md font-semibold ${
                modalOpen ? 'opacity-100' : 'opacity-0'
              }`}
              href={cardUrl}
              style={{
                transition: modalOpen
                  ? 'opacity 1s ease-out 700ms'
                  : 'opacity 0.1s linear',
              }}
            >
              Visit {title}
            </a> */}
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
                  ? 'opacity 1s ease-out 800ms'
                  : 'opacity 0.1s linear',
              }}
            >
              {title}
            </h3>
            <p
              className={`text-xl pt-8 sm:pt-4 ${
                modalOpen ? 'opacity-1' : 'opacity-0'
              }`}
              style={{
                transition: modalOpen
                  ? 'opacity 1s ease-out 900ms'
                  : 'opacity 0.1s linear',
              }}
            >
              {body}
            </p>
          </div>
        </div>
      </div>
      <div
        className={`mt-8 ${modalOpen ? 'opacity-1' : 'opacity-0'}`}
        style={{
          transition: modalOpen
            ? 'opacity 1s ease-out 1000ms'
            : 'opacity 0.1s linear',
        }}
      >
        <h4 className="text-2xl font-semibold">Description</h4>
        <p className="text-lg pt-4">{cardDescription}</p>
      </div>
      <div className="absolute top-0 right-0 mt-12 mr-8 sm:mt-4 sm:mr-4 sm:scale-75">
        <button
          onClick={(e) => {
            e.preventDefault();
            setModalOpen(false);
          }}
        >
          <div
            className={`close-button ${modalOpen ? 'opacity-1' : 'opacity-0'}`}
            style={{
              transition: modalOpen
                ? 'opacity 1s ease-out 1200ms'
                : 'opacity 0.1s linear',
            }}
          ></div>
        </button>
      </div>
    </div>
  );
};

export default SimpleDetailCard;
