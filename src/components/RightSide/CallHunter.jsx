import React from "react";

const CallHunter = () => {
  return (
    <div className="box">
      <div className="year_company">
        <h5>Июнь 2022 — август 2022</h5>
        <h5> CallHunter </h5>
      </div>
      <div className="text">
        <h4> Backend-разработчик </h4>
        <p>
          Перед трудоустройством проходил двухнедельную оплачиваемую стажировку, в течении которой необходимо было изучить TypeScript, FP-TS и Nest.JS.
        </p>
        <br/>
        <p>
          Проект представлял с собой CRM для сотрудников, которые работали с Авито.
        </p>
        <br/>
        <p>
          <b>Стек проекта</b>: <br />
          <ol style={{ listStyle: "none" }}>
            <li>TypeScript</li>
            <li>Nest.JS</li>
            <li>Mongoose</li>
            <li>Docker</li>
            <li>Unit-test</li>
            <li>FP-TS</li>
            <li>Joi</li>
          </ol>
        </p>
        <br />
        <p>
          <b>Рабочий день</b>: <br />
          <ul style={{ listStyle: "-moz-initial inside" }}>
            <li>В 10 часов по Москве выходил на связь с тимлидом и к концу рабочего дня отчитывался по успехам рабочего дня.</li>
            <li>Первым заданием было реализовать фиксацию входа на windows сервер. Для решения был разработан модуль log.module.ts, где были все необходимые роуты. Модуль включает в себя разработка контроллера, dto, mapper, persistence-service, service и бизнес логика: entity, service, command, query, port.</li>
            <li>Разработка обычно делилась на бизнес логику отделенная от библиотеки Nest.JS и использование самого Nets.JS для более легких модулей и связи с бизнес логикой.</li>
            <li>Под каждый написанный модуль необходимо было написать unit-тесты, используя mocks проверялся функционал модуля.</li>
          </ul>
  
          <br />
          <b>Планировка задач</b>: <br />
          <ul style={{ listStyle: "-moz-initial inside" }}>
            <li>issue в GitLab.</li>
            <li>Notion.</li>
          </ul>
          
          <br/>
  
          <b>Исходники кода</b>: <br />
            Приватный репозиторий компании в GitLab.
          <br/>
          <br/>
          <b>Причина ухода</b>: <br />
          <ul className="indent" style={{ listStyle: "-moz-initial inside",  }}>
            В команде я и мой тимлид, который мог пропасть на несколько дней, в итоге работал сам, даже если появлялись вопросы по ТЗ, приходилось самому додумывать и т.д.
          </ul>
        </p>
      </div>
    </div>
  );
};

export default CallHunter;
