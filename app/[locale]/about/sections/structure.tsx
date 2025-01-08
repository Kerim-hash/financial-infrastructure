import { getTranslations } from "next-intl/server";
import React from "react";

const Structure = async () => {
  const t = await getTranslations("AboutPage.structure");
  const listItems = Array.isArray(t.raw("list"))
    ? (t.raw("list") as { title: string; desc: string }[])
    : [];

  return (
    <section className="container my-[80px] px-5 md:px-0">
      <div className="flex items-center md:gap-4">
        <h2 className="text-primary title mb-2">{t("title")}</h2>
        <span className="hidden md:block flex-grow border-t-4 border-primary"></span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px] mt-[80px]">
        {listItems.map((item, index) => {
          return (
            <div key={index} className="flex flex-col">
              <h3 className="title font-normal">
                {item.title}
              </h3>
              <p className="desc1 text-secondary mt-[40px]">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Structure;
