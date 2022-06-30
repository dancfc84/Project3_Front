import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ContactModal from './UI/ContactModal';

export default function Contact() {

  const form = useRef();
  const [showContactModal, setShowContactModal] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xh4ns7m', 'template_nsunmj8', form.current, 'bUjb33xbji2aeQPqW')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    
    setShowContactModal(true)

  };


  return (
    <section>
      <div className="section">
        <div className="container">
          <form ref={form} onSubmit={sendEmail}>
            <div className="field">
              <label className="label">Name</label>
              <input type="text" name="user_name" />
            </div>
            <div className="field">
              <label className="label">Email</label>
              <input type="email" name="user_email" />
            </div>
            <div className="field">
              <label className="label">Message</label>
              <textarea name="message" />
            </div>
            <div>
              <input className="button" type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
      {
        showContactModal && <ContactModal/>
      }

    </section>
  );
}