import trickBookImg from '../../../../../public/images/i/wd-examples/trick-book.png';
import './index.css';

const Card = ({ parentElementInView }) => {
  return (
    <div className={`flex relative flex-shrink-0 flex-grow-0 mb-24 pr-24`}>
      <div
        className={`relative w-96 h-96`}
        style={{
          transition: 'opacity 1s ease-in-out, transform 1s ease-in',
          zIndex: '5',
        }}
      >
        <h2
          className={`text-white font-semibold text-4xl pb-4 transition-opacity duration-1000 ${
            parentElementInView ? 'opacity-1' : 'opacity-0'
          }`}
        >
          Trick Book
        </h2>
        <div
          className={`flip-card w-96 h-96 transition-all duration-1000 ease-in ${
            parentElementInView ? 'translate-y-0' : 'translate-y-32'
          }`}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                className="aspect-square rounded-xl"
                src={trickBookImg}
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>
            <div className="flip-card-back rounded-xl flex flex-col items-center justify-center bg-slate-50">
              <h1>INSERT YOUR HEADER FOR BACK OF CARD HERE</h1>
              <p>Include first sentence to appear on back of card</p>
              <p>Include second sentence to appear on back of card</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
