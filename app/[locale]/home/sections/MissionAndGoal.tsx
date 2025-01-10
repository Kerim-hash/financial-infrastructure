import { getTranslations } from "next-intl/server";
import Image from "next/image";
import React from "react";

const MissionAndGoal = async () => {
  const t = await getTranslations("HomePage.missionAndGoal");

  return (
    <section className="container relative">
      <div className="flex flex-col rounded-lg">
        <div className="relative h-[758px]">
          <div className="flex">
            <Image
              className="flex-1 rounded-tl-lg rounded-tr-lg xl:rounded-tr-none object-cover"
              src="/missionAndGoal1.png"
              alt="Mission and Goal Image 1"
              width={640}
              height={758}
            />
            <Image
              className="flex-1 rounded-tr-lg object-cover hidden xl:block"
              src="/missionAndGoal2.png"
              alt="Mission and Goal Image 2"
              width={640}
              height={758}
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-primary rounded-lg pt-10 pb-[80px] text-white z-10 px-[20px] md:px-[80px]">
            <h3 className="text-xl2 tracking-tightest">{t("title")}</h3>
            <span className="border-t-2 border-white w-full block my-9"></span>
            <p>{t("desc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionAndGoal;
