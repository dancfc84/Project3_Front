import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom"

export default function Contact () {

  const navigate = useNavigate()
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xh4ns7m', 'template_nsunmj8', form.current, 'bUjb33xbji2aeQPqW')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    navigate("/")
  };

  
  return (
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
  );
}