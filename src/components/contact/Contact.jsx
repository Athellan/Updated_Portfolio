import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b2j6ljb",
        "template_6g8e8ma",
        form.current,
        "39Hs5KCDHJ2U-9J7q"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contactez moi</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>jb.cambi@gmx.fr</h5>
            <a href="mailto:jb.cambi@gmx.fr" target="_blank">
              Envoyez moi un message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Jb Cambillard</h5>
            <a href="https://m.me/jb.cambillard/" target="_blank">
              Envoyez moi un message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+336 47 47 17 96</h5>
            <a href="https://wa.me/+33647471796" target="_blank">
              Envoyez moi un message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Votre nom complet"
            pattern="^[A-Za-z][a-z]*( [A-Z][a-z]*)*$"
            minlength="3"
            maxlength="20"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            required
            pattern="^[a-zA-Z0-9.!#$%&’*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
          />
          <textarea
            name="message"
            id=""
            rows="7"
            placeholder="Votre message"
            minlength="15"
            maxlength="250"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Envoyer Message
          </button>
        </form>
      </div>
    </section>
  );
}
