import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_he9eh9p",
      "template_thtvk5e",
      form.current,
      "RlgDcpRbmFbsJ3uZJ"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {/* <article className="contact__option">
            <MdEmail />
            <h4>Email</h4>
            <h5>jesusrodriguez7@comast.net</h5>
            <a href="mailto:jesusrodriguez7@comcast.net" target="_blank">
              Send a Message
            </a>
          </article> */}
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
