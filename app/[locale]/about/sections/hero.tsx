import { getTranslations } from "next-intl/server";
import React from "react";

const Hero = async () => {
  const t = await getTranslations("AboutPage.hero");
  return (
    <section className="hero bg-foreground h-screen-minus-135 rounded-bl-lg rounded-br-lg">
      <div className="container pt-[80px] px-5 md:px-0">
        <h2 className="text-white title">{t("title")}</h2>
        <p className="mt-[80px] text-base md:text-xl text-white md:w-2/3  ml-auto">
          {t("desc")}
        </p>
      </div>
    </section>
  );
};

export default Hero;
