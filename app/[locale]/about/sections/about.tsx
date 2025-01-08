import { getTranslations } from "next-intl/server";
import React from "react";

const About = async () => {
  const t = await getTranslations("AboutPage");

  return (
    <section className="hero bg-secondary-foreground text-secondary rounded-lg">
      <div className="container py-[80px] px-5 md:px-0">
        <h6 className="text-primary text-desc1 mb-6  md:w-2/3">{t("about")}</h6>
      </div>
    </section>
  );
};

export default About;
