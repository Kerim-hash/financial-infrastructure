import React from "react";
import { getTranslations } from "next-intl/server";
import Trust from "./trust";

async function fetchTranslations() {
    const t = await getTranslations("HomePage.trust");
    return t;
  }
const TrustWrapper = async () => {
  const t = await fetchTranslations();
  const listItems = Array.isArray(t.raw("list"))
  ? (t.raw("list") as { title: string; desc: string }[]) 
  : [];
  const translations = {
    title: t("title"),
    list: listItems
  };
  return <Trust translations={translations} />;
};

export default TrustWrapper;
