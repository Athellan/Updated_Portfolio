import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello World, I'm</h5>
        <h1>Jean-Baptiste Cambillard</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">{/* <img src={ME} alt="moi" /> */}</div>

        <a href="#contact" className="scroll__down">
          Aller en bas
        </a>
      </div>
    </header>
  );
}
