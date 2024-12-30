import { getTranslations } from "next-intl/server";
import React from "react";

const OurPlatform = async () => {
  const t = await getTranslations("HomePage.ourPlatform");

  return (
    <section className="py-[80px]">
      <div className="container">
        {/* Заголовок */}
        <div className="flex items-center gap-4">
          <h2 className="text-primary title mb-2">{t("title")}</h2>
          <span className="flex-grow border-t-4 border-primary"></span>
        </div>

        {/* Подзаголовок */}
        <div className="flex items-center gap-4">
          <span className="flex-grow border-t-4 border-primary"></span>
          <h3 className="text-primary title mb-4">{t("subtitle")}</h3>
        </div>

        {/* Описание */}
        <p className="desc-2 text-secondary font-bold max-w-prose ml-auto mt-[80px]">
          {t("desc")}
        </p>
      </div>
    </section>
  );
};

export default OurPlatform;
