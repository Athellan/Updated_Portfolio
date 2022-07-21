import React from "react";
import CV from "../../assets/cv.pdf";

// mes call to action
// CV en assets + redirection page contact

export default function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Téléchargez mon CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Discutons !
      </a>
    </div>
  );
}
