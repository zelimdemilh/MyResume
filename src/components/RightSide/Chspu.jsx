import React from "react";

const Chspu = () => {
  return (
    <div className="box">
      <div className="year_company">
        <h5> 2021 - 2022 </h5>
        <h5> Технопарк ЧГПУ </h5>
      </div>
      <div className="text">
        <h4> Заведующий IT-кластером</h4>
        <p>
          Технопарк представляет с собой образовательное пространство для работы
          над инновационными проектами, обучение студентов новым навыкам и
          повышения их квалификации.
        </p>
        <br/>
        <p>
          Обязанности:
          <ul style={{ listStyle: "-moz-initial inside" }}>
            <li> Обслуживание и работа с компьютерной техникой.</li>
            <li>
              {" "}
              Ведение курсов по интерактивной доске и веб-программирования.{" "}
            </li>
            <li> Проведение семинаров по технологиям и разработке. </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Chspu;
