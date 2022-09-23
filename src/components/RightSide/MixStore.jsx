import React from "react";

const MixStore = () => {
  return (
    <div className="box">
      <div className="year_company">
        <h5>2021 - 2022</h5>
        <h5> MixStore </h5>
      </div>
      <div className="text">
        <h4> Frontend-разработчик</h4>
        <p>
          Аутсорсинг компания, занимающаяся разработкой веб-приложений
        </p>
        <br />
        <p>
          Стек проектов: <br />
          <ol style={{ listStyle: "none" }}>
            <li>JavaScript</li>
            <li> React </li>
            <li> React-Router-Dom </li>
            <li> Redux Toolkit </li>
            <li> Styled-Components </li>
            <li> Axios </li>
            <li> REST API </li>
            <li> Node.JS </li>
            <li> Express </li>
            <li> Mongoose </li>
            <li> JWT-token </li>
          </ol>
        </p>

        <br />

        <p>
          Обязанности:
          <ul style={{ listStyle: "-moz-initial inside" }}>
            <li> Создание UI-компонентов с styled-components. </li>
            <li> Создание слайсов в redux-toolkit. </li>
            <li> Верстка страниц. </li>
            <li> Несложные задачи по бекенду. </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default MixStore;
