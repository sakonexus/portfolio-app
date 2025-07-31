import ContactForm from '@/components/ContactForm';

const Section = ({ section3 }) => {
  return (
    <div
      ref={section3}
      id="cm"
      className="flex bg-blue-400  w-full h-screen items-center	"
    >
      <div className="flex text-center mx-auto align-middle">
        <ContactForm />
      </div>
    </div>
  );
};

export default Section;
