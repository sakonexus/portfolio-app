import emailjs from 'emailjs-com';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

interface MessageContentProps {
  [key: string]: string;
  senderName: string;
  senderEmail: string;
  senderMessage: string;
}

export const sendEmail = (messageContent: MessageContentProps) => {

  console.log('EMAILJS_PUBLIC_KEY', EMAILJS_PUBLIC_KEY)

  emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    messageContent,
    EMAILJS_PUBLIC_KEY
  ).then(
    () => alert("Sent!"),
    (error) => alert("Error: " + error.text) 
  );
};