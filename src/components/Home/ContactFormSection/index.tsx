import ContactForm from '@/components/ContactForm';
import { RefObject } from 'react';
import './index.css';

const ContactFormSection = ({
  section3,
}: {
  section3: RefObject<HTMLDivElement>;
}) => {
  return (
    <div
      ref={section3}
      id="cm"
      className="flex bg-gradient-to-b from-white to-blue-400 to-50% w-full h-screen items-center justify-center"
    >
      <div className="flex flex-col items-center justify-start px-4">
        <img
          src="/images/i/cartoon-finger.png"
          className="finger-pointer lg:w-60 sm:w-36"
        />
        <div className="flex flex-col text-center mx-auto align-middle bg-white py-8 px-4 rounded-xl border-zinc-400 drop-shadow-xl mt-6">
          <div className="flex flex-col text-center justify-center pb-12 gap-y-4">
            <h1 className="lg:text-5xl font-semibold sm:text-4xl">
              Send me a message!
            </h1>
            <p className="lg:text-lg sm:text-md">
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

export default ContactFormSection;
