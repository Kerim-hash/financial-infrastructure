import { getTranslations } from "next-intl/server";
import React from "react";

const Mission = async () => {
    const t = await getTranslations("AboutPage.mission");
    const listItems = Array.isArray(t.raw("list"))
    ? (t.raw("list") as string[])
    : [];
  return <section className="container my-[80px] px-5 md:px-0">
     <div className="flex items-center md:gap-4">
          <h2 className="text-primary title mb-2">{t("title")}</h2>
          <span className="hidden md:block flex-grow border-t-4 border-primary"></span>
        </div>

        <div className="flex flex-row px-4 md:px-0 py-20 md:py-[80px] gap-y-10">
        <div className="flex-1 hidden md:block">
        </div>
        <div className="flex-1">
          <p className="desc1 text-secondary mb-8">{t("listTitle")}</p>
          {listItems.length > 0 && (
            <ul className="space-y-6 mt-6">
              {listItems.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  {/* Icon */}
                  <div className="flex-shrink-0">
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
                  <span className="text-primary text-lg font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
  </section>;
};

export default Mission;
