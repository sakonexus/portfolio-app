import {sendEmail} from '@/utils/email.ts'
import { useState } from 'react';

const ContactForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const updateName = (e) => {
    e.preventDefault();

    setName(e.target.value)
  }

  const updateEmail = (e) => {
    e.preventDefault();

    setEmail(e.target.value)
  }

  const updateMessage = (e) => {
    e.preventDefault();

    setMessage(e.target.value)
  }

  const submitEmailContent = (e) => {
    e.preventDefault();

    sendEmail({
      senderName: name,
      senderEmail: email,
      senderMessage: message
    })
  }

  return (
    <div>
      <form onSubmit={(e) => submitEmailContent(e)} className='flex flex-col gap-y-8'>
        <div className="flex flex-col gap-y-2 text-left">
        <label>Name</label>
        <input className='bg-white' type="text" name="name" onChange={(e) => updateName(e)} required />
        </div>
        <div className="flex flex-col gap-y-2 text-left">
        <label>Email</label>
        <input className='bg-white' type="email" name="email" onChange={(e) => updateEmail(e)} required />
        </div>
        <div className="flex flex-col gap-y-2 text-left">
        <label>Message</label>
        <textarea className='bg-white' onChange={(e) => updateMessage(e)} name="message" required />
        </div>
        <button type="submit" className='bg-white'>Send</button>
      </form>
    </div>
  )
}

export default ContactForm;