import { useState, useEffect, useRef } from 'react';
import { sendEmail } from '@/api/sendEmail';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isFormValid, setIsFormValid] = useState(false);

  const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setName(e.target.value);
  };

  const updateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setEmail(e.target.value);
  };

  const updateMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();

    setMessage(e.target.value);
  };

  const submitEmailContent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailRes = await sendEmail({
      name: name,
      email: email,
      message: message,
    });

    console.log('emailRes after send', emailRes);

    if (emailRes.status === 200) {
      setName('');
      setEmail('');
      setMessage('');

      alert(emailRes.message);
    }
  };

  useEffect(() => {
    if (formRef.current) {
      const isFormValid = formRef.current.checkValidity();

      setIsFormValid(isFormValid);
    }
  }, [name, email, message]);

  return (
    <div className="flex w-full">
      <form
        ref={formRef}
        onSubmit={(e) => submitEmailContent(e)}
        className="flex flex-col gap-y-8 w-full"
      >
        <div className="rgb-border p-1 rounded-lg">
          <input
            className={`text-xl focus:outline-0 bg-white h-14 rounded-lg px-2 w-full ${name.length === 0 ? 'font-semibold' : ''}`}
            type="text"
            name="name"
            onChange={(e) => updateName(e)}
            required
            placeholder="Name"
            minLength={2}
            value={name}
          />
        </div>
        <div className="rgb-border p-1 rounded-lg">
          <input
            className={`text-xl focus:outline-0 bg-white h-14 rounded-lg px-2 w-full ${email.length === 0 ? 'font-semibold' : ''}`}
            type="email"
            name="email"
            onChange={(e) => updateEmail(e)}
            required
            placeholder="Email"
            minLength={6}
            value={email}
          />
        </div>
        <div className="rgb-border p-1 rounded-lg">
          <textarea
            className={`bg-white focus:outline-0 h-14 rounded-lg  p-1 w-full text-xl ${message.length === 0 ? 'font-semibold' : ''}`}
            onChange={(e) => updateMessage(e)}
            name="message"
            required
            placeholder="Message"
            minLength={10}
            value={message}
          />
        </div>
        <div
          className={`${isFormValid ? 'radial-shift' : 'bg-zinc-300'} p-2 rounded-lg`}
        >
          <button
            type="submit"
            className={`text-2xl font-semibold h-14 rounded-lg w-full transition-all duration-300 bg-white ${isFormValid ? 'hover:cursor-pointer hover:bg-amber-600 hover:text-white' : 'hover:cursor-not-allowed bg-zinc-300'}`}
            disabled={!isFormValid}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
