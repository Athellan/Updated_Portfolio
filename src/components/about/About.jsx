import React from "react";
import "./about.css";
import ME from "../../assets/profile-pic.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export default function About() {
  return (
    <section id="about">
      <h5>A savoir</h5>
      <h2> A propos de moi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="moi" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <a href="#experience">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>Junior developer</small>
              </article>
            </a>
            <a href="#testimonials">
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>Vous peut-etre ?</small>
              </article>
            </a>
            <a href="#portfolio">
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projets</h5>
                <small>Mes réalisations</small>
              </article>
            </a>
          </div>
          <p>
            Voici mon portfolio, crée à la suite de ma formation à l'école
            O'Clock. J'ai pu apprendre lors de cette formation plusieurs
            langages, tels que PHP, JS, et surtout React, qui m'a permis de
            créer ce portfolio. J'ai pu également apprendre les bases du
            développement IOS à l'Apple School. Mon profil vous intéresse ?
          </p>
          <a href="#contact" className="btn btn-primary">
            On en discute ?
          </a>
        </div>
      </div>
    </section>
  );
}
