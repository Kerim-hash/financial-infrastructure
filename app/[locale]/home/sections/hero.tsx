import { getTranslations } from "next-intl/server";
import React from "react";

const Hero = async () => {
    const t = await getTranslations("HomePage");
    const tCommon = await getTranslations("common");
  return <div className="hero bg-foreground h-screen-minus-135">
    <div className="container flex flex-col h-full justify-center">
      <div className="max-w-5xl">
            <h2 className="text-white title">{t("hero.title")}</h2>
            <p className="text-white mt-6 mb-12 text-desc2">{t("hero.desc")}</p>
            <button className="btn w-full">{tCommon("contactUs")}</button>
      </div>
    </div>
  </div>;
};

export default Hero;
