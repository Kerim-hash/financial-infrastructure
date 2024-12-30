import { getTranslations } from "next-intl/server";
import Image from "next/image";
import React from "react";

const Trust = async () => {
  const t = await getTranslations("HomePage.trust");
  const listItems = Array.isArray(t.raw("list"))
  ? (t.raw("list") as string[])
  : [];

  return <div className="container mt-[80px] mb-[120px]">
        <div className="flex items-center gap-10">
          <span className="flex-grow border-t-4 border-primary"></span>
          <h2 className="text-primary title mb-2 font-normal">{t("title")}</h2>
          <span className="flex-grow border-t-4 border-primary"></span>
        </div>

        <div className="flex mt-[80px] gap-8">
          {Array.isArray(listItems) && listItems.map((item, index) => {
              return <div key={index} className="flex flex-col items-center text-center space-y-6">
                    <Image src={`/trust${index+1}.png`} alt="trust" width={70} height={70} />
                    <h5 className="desc1 text-primary font-semibold">{item.title}</h5>
                    <p className="desc2 text-secondary">{item.desc}</p>
              </div>
          })}
        </div>
  </div>;
};

export default Trust;
