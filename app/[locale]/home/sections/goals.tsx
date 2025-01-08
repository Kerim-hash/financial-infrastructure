import { getTranslations } from "next-intl/server";
import React from "react";

const Goals = async () => {
  const t = await getTranslations("HomePage.goals");
  const listItems = Array.isArray(t.raw("list"))
    ? (t.raw("list") as { title: string; desc: string }[])
    : [];

  return (
    <section className="bg-primary text-white p-5 md:p-16 rounded-tl-lg rounded-tr-lg">
      <div className="flex items-center mb-[80px]">
        <h2 className="title tracking-tightest font-bold text-[2rem] md:text-[4rem]">
          {t("title")}
        </h2>
        <div className="w-1/2">
          <span className="w-2/3 h-1 bg-white mb-8 block ml-auto"></span>
        </div>
      </div>

      <p className="desc2 text-white  mb-[80px]">{t("desc")}</p>

      <div className="flex justify-between gap-[24px] min-h-[440px]">
        {listItems.map((item, index) => {
          return (
            <div key={index} className="group flex-1 border px-[24px] py-[40px] rounded-lg border-accent-foreground transition-colors hover:bg-accent-foreground">
              <h3 className="text-lg font-semibold flex items-center gap-3 group-hover:text-black">
                <span className="h-4 w-4 bg-white group-hover:bg-black rounded-full"></span>
                {item.title}
              </h3>
              <p className="desc1 mt-2 text-[#FFFFFF99] group-hover:text-black">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Goals;
