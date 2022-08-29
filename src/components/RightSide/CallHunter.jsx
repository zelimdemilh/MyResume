import React from "react";

const CallHunter = () => {
  return (
    <div className="box">
      <div className="year_company">
        <h5>2022</h5>
        <h5> CallHunter </h5>
      </div>
      <div className="text">
        <h4> Backend-разработчик</h4>
        <p>
          Компания занималась рекламой, продвижение недвижимости через авито в
          больших объёмах. Также компания сотрудничала с застройщиками МИЦ,
          Гранель, Самолёт, Эталон и рядом мелких застройщиков.
        </p>
        <br />
        <p>
          Цель проекта: <br />
          1. CRM для сотрудников, которые размещали объявления на авито.
          <br />
          2. Интеграцией с телефонией, чтобы автоматизировать интеграции с
          застройщиками.
        </p>
        <br />
        <p>
          Стек проекта: <br />
          <ol style={{ listStyle: "none" }}>
            <li>TypeScript</li>
            <li>Nest.JS</li>
            <li>Mongoose</li>
            <li>Fp-TS</li>
            <li>Docker</li>
            <li>Joi</li>
            <li>Fp-TS</li>
            <li>Axios</li>
          </ol>
        </p>
        <br />
        <p>
          Обязанности: <br />
          <ul style={{ listStyle: "-moz-initial inside" }}>
            <li>
              {" "}
              Разработка и оптимизация модулей (контроллеры, роуты, dto, mapper,
              persistence-service).
            </li>
            <li>
              {" "}
              Разработка бизнес логики отдельно от библиотеки Nest.JS ( entity,
              service, command, query, port ).{" "}
            </li>
            <li> Интеграция api телефонии различных производителей. </li>
            <li> Написание unit-тестов для разработанных модулей. </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default CallHunter;
