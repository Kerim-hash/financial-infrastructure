import { getTranslations } from "next-intl/server";
import React from "react";

const Hero = async () => {
    const t = await getTranslations("ContactPage");
    const tCommon = await getTranslations("common");
  return <div className="hero bg-foreground h-screen-minus-135">
    <div className="container pt-[80px]">
            <h2 className="text-white title">{t("title")}</h2>
            <button className="btn btn-lg w-1/2 inline-block mt-12">{tCommon("contactUs")}</button>
    </div>
  </div>;
};

export default Hero;
