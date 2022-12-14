import React from "react";
import "./footer.css";
import { IoLogoTwitter } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        JB CORPORATION
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Accueil</a>
        </li>
        <li>
          <a href="#about">A propos</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li>
          <a href="#services">Services</a>
        </li> */}
        <li>
          <a href="#portfolio">Porfolio</a>
        </li>
        <li>
          <a href="#testimonials">Avis</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/jean-baptiste-cambillard/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/Athellan" target="_blank">
          <FaGithub />
        </a>
        <a href="https://twitter.com">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Made with ❤️ by Jb</small>
      </div>
    </footer>
  );
}
