import { getTranslations } from "next-intl/server";
import React from "react";

const Hero = async () => {
    const t = await getTranslations("HomePage");
    const tCommon = await getTranslations("common");

    return (
        <div className="hero bg-foreground h-screen-minus-135 rounded-bl-lg rounded-br-lg">
            <div className="container flex flex-col h-full justify-center px-5 md:px-0">
                <div className="max-w-4xl">
                    <h2 className="title text-white font-normal tracking-tightest">
                        {t("hero.title")}
                    </h2>
                    <p className="desc2 text-white mt-6 mb-12">
                        {t("hero.desc")}
                    </p>
                    <button className="btn btn-lg w-full">
                        {tCommon("contactUs")}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
