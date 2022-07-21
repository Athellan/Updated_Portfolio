import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
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
            {/* <img src={ME} alt="moi" /> */}
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Junior developer</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>Pas beaucoup...</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projets</h5>
              <small>Mes réalisations</small>
            </article>
          </div>
          <p>
            Missos purgaverint visa percontatum paucis remedium adminiculum
            oculis corpus ad labes ad est est purgaverint valeant perferentem
            quos missos aliud torpescit domum amicum aegritudine metuitur videat
            excogitatum eos famulos noti.
          </p>
          <a href="#contact" className="btn btn-primary">
            On en discute ?
          </a>
        </div>
      </div>
    </section>
  );
}
