import React from "react";

const Languages = () => {
  return (
    <div className="contactInfo languages">
      <h3 className="title"> Языки </h3>
      <ul>
        <li>
          <span className="text">Русский</span>
          <span className="percent">
            <div style={{ width: "90%" }}></div>
          </span>
        </li>
        <li>
          <span className="text">Английский</span>
          <span className="percent">
            <div style={{ width: "30%" }}></div>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Languages;
