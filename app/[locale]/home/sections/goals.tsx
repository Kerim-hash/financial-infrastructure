import React from "react";

const Goals = () => {
  return (
    <section className="bg-primary text-white p-5 md:p-16 rounded-tl-lg rounded-tr-lg">
      <div className="flex items-center mb-[80px]">

      <h2 className="title tracking-tightest font-bold text-[2rem] md:text-[4rem]">
        Ставим новые цели и достигаем их!
      </h2>
      <div className="w-1/2">
        <span className="w-2/3 h-1 bg-white mb-8 block ml-auto"></span>
      </div>
      </div>

      <p className="desc2 text-white  mb-8">
        Международная торговля не знает границ, а с участием лучших
        профессионалов в команде любой проект может быть реализован с
        максимальной выгодой и перспективами для долгосрочного роста
      </p>

    
      <div className="flex flex-col justify-between space-y-10">
        <div className="flex-1  md:max-w-[33.33%]">
          <h3 className="text-lg font-semibold flex items-center gap-3">
            <span className="h-4 w-4 bg-green-400 rounded-full"></span>
            Оставьте заявку
          </h3>
          <p className="desc1 mt-2  text-[#FFFFFF99]">
            Укажите ваше предложение, интересы сотрудничества или запрос на
            консультацию.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="flex-1 md:max-w-[33.33%]">
            <h3 className="text-lg font-semibold flex items-center gap-3">
              <span className="h-4 w-4 bg-green-400 rounded-full"></span>
              Обратная связь
            </h3>
            <p className="desc1 mt-2 w-2/3 text-[#FFFFFF99]">
              Ваша заявка будет передана профильному специалисту.
            </p>
          </div>
        </div>

        <div className="flex justify-end items-end">
        <div className="flex-1 md:max-w-[33.33%]">
          <h3 className="text-lg font-semibold flex items-center gap-3">
            <span className="h-4 w-4 bg-green-400 rounded-full"></span>
            Первая встреча
          </h3>
          <p className="desc1 mt-2  text-[#FFFFFF99]">
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
