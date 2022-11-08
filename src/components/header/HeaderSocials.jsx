import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/jean-baptiste-cambillard/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Athellan" target="_blank">
        <FaGithub />
      </a>
      {/* <a href="https://fr.fiverr.com/" target="_blank">
        <SiFiverr value={{ size: "2rem" }} />
      </a> */}
    </div>
  );
}
