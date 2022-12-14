import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { TbBrandVercel } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";
import { TfiMicrosoft } from "react-icons/tfi";

export default function Experience() {
  return (
    <section id="experience">
      <h5>Mes Skills</h5>
      <h2>Mon expérience</h2>

      {/* début du front */}
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermédiaire</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermédiaire</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermédiaire</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermédiaire</small>
              </div>
            </article>
          </div>
        </div>
        {/* fin du front */}
        {/* début du back */}
        <div className="experience__backend">
          <h3>Backend development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Débutant</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Débutant</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Débutant</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MariaDB</h4>
                <small className="text-light">Débutant</small>
              </div>
            </article>
          </div>
        </div>
        {/* fin du back */}
        {/* Début Swift */}
        <div className="experience__ios">
          <h3>IOS development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Swift</h4>
                <small className="text-light">Intermédiaire</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>SwiftUI</h4>
                <small className="text-light">Intermédiaire</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Firebase</h4>
                <small className="text-light">Débutant</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MVVM</h4>
                <small className="text-light">Intermédiaire</small>
              </div>
            </article>
          </div>
        </div>
        {/* Fin Swift */}
        {/* Début Tools */}
        <div className="experience__tools">
          <h3>Mes outils</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaGithub className="experience__details-icon" />
              <div>
                <h4>GitHub</h4>
                <small className="text-light">Intermédiaire</small>
              </div>
            </article>
            <article className="experience__details">
              <TfiMicrosoft className="experience__details-icon" />
              <div>
                <h4>VSCode</h4>
                <small className="text-light">Intermédiaire</small>
              </div>
            </article>
            <article className="experience__details">
              <TbBrandVercel className="experience__details-icon" />
              <div>
                <h4>Vercel</h4>
                <small className="text-light">Débutant</small>
              </div>
            </article>
            <article className="experience__details">
              <TbBrandNextjs className="experience__details-icon" />
              <div>
                <h4>Next JS</h4>
                <small className="text-light">Débutant</small>
              </div>
            </article>
          </div>
        </div>
        {/* Fin Tools */}
      </div>
    </section>
  );
}
