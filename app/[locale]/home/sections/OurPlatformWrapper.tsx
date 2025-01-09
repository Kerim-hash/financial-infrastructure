import React from "react";
import OurPlatform from "./ourPlatform";
import { getTranslations } from "next-intl/server";

async function fetchTranslations() {
    const t = await getTranslations("HomePage.ourPlatform");
    return t;
  }
const OurPlatformWrapper = async () => {
  const t = await fetchTranslations();

  const translations = {
    title: t("title"),
    subtitle: t("subtitle"),
    desc: t("desc"),
  };
  return <OurPlatform translations={translations} />;
};

export default OurPlatformWrapper;
