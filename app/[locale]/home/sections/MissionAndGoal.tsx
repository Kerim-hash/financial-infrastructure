import { getTranslations } from "next-intl/server";
import Image from "next/image";
import React from "react";

const MissionAndGoal = async () => {
    const t = await getTranslations("HomePage.missionAndGoal");
  return (
    <div className="container relative">
        <div className="flex flex-col rounded-lg">
            <div className="relative h-[758px]" >
                <div className="flex">
                <Image className="flex-1 rounded-tl-lg object-cover" src="/missionAndGoal1.png" alt="mission And Goal" width={640} height={758} />
                <Image className="flex-1 rounded-tr-lg object-cover" src="/missionAndGoal2.png" alt="mission And Goal" width={640} height={758} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-primary rounded-lg pt-10 pb-[80px] text-white z-10 px-[80px]">
                    <h3 className="text-xl2">{t("title")}</h3>
                    <span className="border-t-4 border-white w-full block my-10"></span>
                    <p>{t("desc")}</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default MissionAndGoal;
