import React from "react";

const Freelance = () => {
  return (
    <div className="box">
      <div className="year_company">
        <h5> Сентябрь 2018 — ноябрь 2020 </h5>
        <h5> Фриланс </h5>
      </div>
      <div className="text">
        <h4> Разработчик </h4>
        <p>
          Начиная с поступления в универ занимался разработкой лендингов и веб приложений на WordPress.
        </p>
        <br/>
        <p>
          <b>Обязанности</b>:
          <ul style={{ listStyle: "-moz-initial inside" }}>
            <li>презентация разработки.</li>
            <li>разработка и адаптация лендинга.</li>
            <li>управления обязанностями в команде.</li>
            <li>исправления багов.</li>
            <li>добавление новых фич.</li>
            <li>интеграция с популярными платформами.</li>
          </ul>
          <br/>
          <b>GrozTeach</b>:
          <p>Разработка веб-приложения GrozTeach. Суть проекта это упрощения поиска репетитора. Данный проект предлагал пользователю две роли: клиент и преподаватель. Клиент мог оставить отзыв, найти преподавателя рядом с домом, записаться на приём.</p>
          <br/>
          <b>VolunteerUp</b>:
          <p> Платформа предназначенная для увеличения волонтеров в республике. Сайт предлагал возможность вести поощрительную систему для волонтеров, реализация данной фичу позволяла вести балло-рейтинговую систему для участников волонтерской акции. Была внедрена карта, где пользователь мог узнать где проходит акция, кем она проводится, что за акция и сколько ещё осталось мест.</p>
        </p>
      </div>
    </div>
  );
};

export default Freelance;
