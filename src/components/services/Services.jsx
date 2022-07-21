import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

export default function Services() {
  return (
    <section id="services">
      <h5>Ce que je propose</h5>
      <h2>Mes services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI / UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem porro quisquam est qui dolorem ipsum</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem porro quisquam est qui dolorem ipsum</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem porro quisquam est qui dolorem ipsum</p>
            </li>
          </ul>
        </article>
        {/* Fin UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem porro quisquam est qui dolorem ipsum</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem porro quisquam est qui dolorem ipsum</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem porro quisquam est qui dolorem ipsum</p>
            </li>
          </ul>
        </article>
        {/* Fin webdev */}
        <article className="service">
          <div className="service__head">
            <h3>Content</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem porro quisquam est qui dolorem ipsum</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem porro quisquam est qui dolorem ipsum</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem porro quisquam est qui dolorem ipsum</p>
            </li>
          </ul>
        </article>
        {/* Fin content */}
      </div>
    </section>
  );
}
