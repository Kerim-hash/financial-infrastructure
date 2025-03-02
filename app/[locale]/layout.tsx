import "./globals.css";

import Navbar from "@/components/NavBar";
import { Locale, routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { Suspense } from "react";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      </Suspense>
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}
