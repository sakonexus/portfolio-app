import WebDevSection from '../WebDevSection';

const Section = ({ section2, section3, section4, section5 }) => {
  return (
    <>
      <div
        ref={section2}
        id="dme"
        className="flex bg-white w-full h-screen items-center relative"
        style={{ zIndex: '30' }}
      >
        <div className="flex text-center mx-auto align-middle">
          direct marketing experience
        </div>
      </div>
      <div
        ref={section3}
        id="tik"
        className="flex bg-blue-400  w-full h-screen items-center	"
      >
        <div className="flex text-center mx-auto align-middle">
          things i know
        </div>
      </div>
      <div
        ref={section4}
        id="pg"
        className="flex bg-green-400 w-full h-screen items-center	"
      >
        <div className="flex text-center mx-auto align-middle">playground</div>
      </div>
      <div
        ref={section5}
        id="cm"
        className="flex bg-lime-400 w-full h-screen items-center	"
      >
        <div className="flex text-center mx-auto align-middle">contact me</div>
      </div>
    </>
  );
};

export default Section;
