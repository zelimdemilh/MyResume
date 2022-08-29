import React from "react";

const Contacts = () => {
  return (
    <div className="contactInfo">
      <h3 className="title">Контакты</h3>
      <ul>
        <li>
          <a href="https://t.me/zelimdemilh">
            <span className="icon">
              <i className="bi bi-telegram"></i>
            </span>
            <span className="text"> @zelimdemilh </span>
          </a>
        </li>
        <li>
          <a href="https://github.com/ZelimDemilh">
            <span className="icon">
              <i className="bi bi-github"></i>
            </span>
            <span className="text"> ZelimDemilh </span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/mwlite/in/zelim-demilkhanov-48ab15236">
            <span className="icon">
              <i className="bi bi-linkedin"></i>
            </span>
            <span className="text"> Zelim Demilh</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
