import { getTranslations } from "next-intl/server";
import React from "react";

const About = async () => {
  const t = await getTranslations("ContactPage");
  const tCommon = await getTranslations("common");

  return (
    <div className="hero bg-secondary-foreground text-secondary">
      <div className="container py-[80px]">
        {/* Заголовок */}
        <h2 className="text-primary title mb-6">{t("title")}</h2>

        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <h3 className="text-lg font-semibold">{tCommon("office.title")}</h3>
            <p className="text-sm">{tCommon("office.value")}</p>
          </div>

          <div className="">
            <h3 className="text-lg font-semibold">{tCommon("phone")}</h3>
            <p className="text-sm">+ 996 502 155 122</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="">
            <h3 className="text-lg font-semibold">{tCommon("email")}</h3>
            <p className="text-sm">d.asanovdesign@gmail.com</p>
          </div>

          <div className="">
            <h3 className="text-lg font-semibold">{tCommon("schedule")}</h3>
            <p className="text-sm">{tCommon("schedule.value")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
