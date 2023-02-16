import React from "react";
import "./index.css";
import CallHunter from "./CallHunter";
import Freelance from "./Freelance";
import Unicode from "./Unicode";
import Skills from "./Skills";
import Introducere from "./Introducere";

const RightSide = () => {
  return (
    <div className="right_side">
      <Introducere />

      <div className="about">
        <h2 className="title2"> Опыт работы</h2>
        <Unicode/>
        <CallHunter />
        <Freelance/>
        <Skills />
      </div>
    </div>
  );
};

export default RightSide;
