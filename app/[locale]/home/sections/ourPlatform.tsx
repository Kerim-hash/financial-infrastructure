import { getTranslations } from "next-intl/server";
import React from "react";

const OurPlatform = async () => {
  const t = await getTranslations("HomePage.ourPlatform");

  return (
    <section className="my-[60px] md:my-[80px]">
      <div className="container px-5 md:px-0">
        <div className="flex items-center md:gap-4">
          <h2 className="text-primary title mb-2">{t("title")}</h2>
          <span className="hidden md:block flex-grow border-t-4 border-primary"></span>
        </div>

        <div className="flex items-center md:gap-4 md:mt-9">
          <span className="flex-grow border-t-4 border-primary"></span>
          <h3 className="text-primary title mb-4">{t("subtitle")}</h3>
        </div>

        <p className="desc2 text-secondary font-bold max-w-[630px] ml-auto mt-[60px] md:mt-[80px]">
          {t("desc")}
        </p>
      </div>
    </section>
  );
};

export default OurPlatform;
