import React from "react";
import "./index.css";
import CallHunter from "./CallHunter";
import Chspu from "./Chspu";
import MixStore from "./MixStore";
import Skills from "./Skills";
import Introducere from "./Introducere";

const RightSide = () => {
  return (
    <div className="right_side">
      <Introducere />

      <div className="about">
        <h2 className="title2"> Опыт работы</h2>
        <CallHunter />
        <MixStore />
        <Chspu/>
        <Skills />
      </div>
    </div>
  );
};

export default RightSide;
