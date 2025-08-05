import ContactForm from '@/components/ContactForm';

const Section = ({ section3 }) => {
  return (
    <div
      ref={section3}
      id="cm"
      className="flex bg-gradient-to-b from-white to-blue-400 to-50% w-full h-screen items-center justify-center"
    >
      <div className="flex flex-col items-center justify-start">
        <img src="/images/i/cartoon-finger.png" className="w-64" />
        <div className="flex flex-col text-center mx-auto align-middle bg-white p-8 rounded-xl border-zinc-400 drop-shadow-xl mt-4">
          <div className="flex flex-col text-center justify-center pb-12 gap-y-4">
            <h1 className="text-5xl font-semibold">Send me a message!</h1>
            <p className="text-lg">
              No data is collected. This is a direct email sent to me by a
              private mailbox.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Section;
