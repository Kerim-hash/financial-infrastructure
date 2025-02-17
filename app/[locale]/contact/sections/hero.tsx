import { getTranslations } from "next-intl/server";
import React from "react";

const Hero = async () => {
  const t = await getTranslations("ContactPage");
  const tCommon = await getTranslations("common");
  return (
    <div className="hero bg-foreground h-screen-minus-135 px-5">
      <div className="container pt-[80px]">
        <h2 className="text-white title">{t("title")}</h2>
        <p className="text-white desc1 mt-6">{t('desc')}</p>
        <a href="tel:+996999990000"  className="btn btn-lg w-1/2 inline-block mt-12 text-center">
        {tCommon("contactUs")}
          </a>
      </div>
    </div>
  );
};

export default Hero;
