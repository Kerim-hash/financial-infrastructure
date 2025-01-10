import React from "react";
import { getTranslations } from "next-intl/server";
import Goals from "./goals";

async function fetchTranslations() {
    const t = await getTranslations("HomePage.goals");
    return t;
  }
const GoalsWrapper = async () => {
  const t = await fetchTranslations();
  const listItems = Array.isArray(t.raw("list"))
  ? (t.raw("list") as { title: string; desc: string }[]) 
  : [];
  const translations = {
    title: t("title"),
    desc: t("desc"),
    list: listItems
  };
  return <Goals translations={translations} />;
};

export default GoalsWrapper;
