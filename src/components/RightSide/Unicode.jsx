import React from "react";

const Unicode = () => {
  return (
    <div className="box">
      <div className="year_company">
        <h5>Ноябрь 2022 — н.в.</h5>
        <h5> Unicode </h5>
      </div>
      <div className="text">
        <h4> Преподаватель(Frontend-разработки) </h4>
  
        Unicode это школа программирования формата bootcamp.<br/><br/>
  
        <b>Обязанности</b>:<br/>
        <ul style={{ listStyle: "-moz-initial inside" }}>
          <li>Ведение тикетов в Notion.</li>
          <li>Проведение лекции.</li>
          <li>Проверка заданий студентов.</li>
          <li>Наставничество для обучающихся.</li>
        </ul>
        
        <br/>
        
        <b>Рабочий день</b>:
        <ul style={{ listStyle: "-moz-initial inside"}}>
          <li>Каждый день начинается с лекции и выдачи задач в notion, отвечаю на вопросы студентов после лекции.</li>
          <li>В течении дня, более подробно, объясняю задачу и даю ссылки на, необходимый, ресурс.</li>
          <li>После выполнения задач, студент переносит свой тикет в поле "Code Review" и я проверяю решение на запах кода и правильность. Если что то в коде выполнено не так, то тикет получает статус "In Progress" и студент начинает исправление ошибок, по написанным замечаниям.</li>
        </ul>
  
        <br/>
        <b>Языки программирования и технологии, которые необходимы для работы</b>:
        <ul style={{ listStyle: "-moz-initial inside"}}>
          <li>TypeScript.</li>
          <li>JavaScript.</li>
          <li>React, Redux, Redux-Toolkit (JS, TS).</li>
          <li>SCSS.</li>
          <li>React-Router-Dom.</li>
          <li>Github.</li>
          <li>Notion.</li>
        </ul>
        
      </div>
    </div>
  );
};

export default Unicode;
