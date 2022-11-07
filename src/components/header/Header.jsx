import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./header.css";
import CTA from "./CTA";
// import ME from "../../assets/me.png";
import Model from "../../Model";
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

        <div className="me">
          <Canvas
            camera={{ position: [2, 0, 12.25], fov: 15 }}
            style={{
              backgroundColor: "transparent",
              width: "50vh",
              height: "55vh",
            }}
          >
            <ambientLight intensity={1.25} />
            <ambientLight intensity={0.1} />
            <directionalLight intensity={0.4} />
            <Suspense fallback={null}>
              <Model position={[-0.5, -0.5, 0.2]} />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>

        <a href="#contact" className="scroll__down">
          Aller en bas
        </a>
      </div>
    </header>
  );
}
