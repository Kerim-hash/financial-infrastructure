import React from "react";
import { getTranslations } from "next-intl/server";

const About = async () => {
  const t = await getTranslations("HomePage.about");
  const listItems = Array.isArray(t.raw("list"))
    ? (t.raw("list") as string[])
    : [];

  return (
    <div className="bg-secondary-foreground rounded-lg">
      <div className="flex container py-[80px]">
        <div className="flex-1">
          <h2 className="title">{t("title")}</h2>
        </div>
        <div className="flex-1">
          <p className="desc1 text-secondary">{t("desc")}</p>
          <ul className="space-y-3 mt-10">
            {Array.isArray(listItems) &&
              listItems.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  {/* Иконка */}
                  <div>
                    <svg
                      width="13"
                      height="21"
                      viewBox="0 0 13 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 2C7.90769 8.27692 9.79487 10.2821 10 10.5L2 19"
                        stroke="#0042BA"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  {/* Текст элемента списка */}
                  <span className="text-primary text-lg font-semibold">{item}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
