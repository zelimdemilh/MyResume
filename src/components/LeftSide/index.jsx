import React from "react";
import "./index.css";
import Profile from "./Profile";
import Contacts from "./Contacts";
import Education from "./Education";
import Languages from "./Languages";

const LeftSide = () => {
  return (
    <div className="left_side">
      <Profile />
      <Contacts />
      <Education />
      {/*<Languages />*/}
    </div>
  );
};

export default LeftSide;
