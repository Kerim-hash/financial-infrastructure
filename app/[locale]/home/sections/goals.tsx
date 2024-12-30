import React from "react";

const Goals = () => {
  return (
    <section className="bg-primary text-white p-8 md:p-16 rounded-tl-lg rounded-tr-lg">
      {/* Заголовок */}
      <div className="flex items-center mb-[80px]">

      <h2 className="text-4xl md:text-5xl font-bold">
        Ставим новые цели и достигаем их!
      </h2>
      <div className="w-1/2">
        <span className="w-2/3 h-1 bg-white mb-8 block ml-auto"></span>
      </div>
      </div>

      {/* Подзаголовок */}
      <p className="desc2 text-white  mb-8">
        Международная торговля не знает границ, а с участием лучших
        профессионалов в команде любой проект может быть реализован с
        максимальной выгодой и перспективами для долгосрочного роста
      </p>

      {/* Линия */}
    

      {/* Пункты */}
      <div className="flex flex-col justify-between space-y-10">
        {/* Первый пункт */}
        <div className="flex-1 max-w-[33.33%]">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <span className="h-3 w-3 bg-green-400 rounded-full"></span>
            Оставьте заявку
          </h3>
          <p className="text-sm text-gray-300 mt-2 w-2/3">
            Укажите ваше предложение, интересы сотрудничества или запрос на
            консультацию.
          </p>
        </div>

        {/* Второй пункт */}
        <div className="flex justify-center">
          <div className="flex-1 max-w-[33.33%]">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <span className="h-3 w-3 bg-green-400 rounded-full"></span>
              Обратная связь
            </h3>
            <p className="text-sm text-gray-300 mt-2 w-2/3">
              Ваша заявка будет передана профильному специалисту.
            </p>
          </div>
        </div>

        {/* Третий пункт */}
        <div className="flex justify-end items-end">
        <div className="flex-1 max-w-[33.33%]">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <span className="h-3 w-3 bg-green-400 rounded-full"></span>
            Первая встреча
          </h3>
          <p className="text-sm text-gray-300 mt-2 w-2/3">
            Мы предоставим актуальную информацию и обсудим возможные шаги
            сотрудничества.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Goals;
