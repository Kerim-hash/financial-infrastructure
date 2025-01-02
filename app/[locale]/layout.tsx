import "./globals.css";

import Navbar from "@/components/NavBar";
import { Locale, routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { Open_Sans } from 'next/font/google';
import { Suspense } from "react";

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap', 
  variable: '--font-open-sans',
});


export const metadata: Metadata = {
  title: "Финансовая инфраструктура",
  description: "Эффективная поддержка бизнеса, предпринимательства, трейдинга, а также сфер торговли и услуг всех ключевых направлений, включая работу с национальными проектами, международное сотрудничество и глобальную поддержку, обеспечит условия для развития и достижения целей пользователей.",
};

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
  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`
          ${openSans.variable} 
          antialiased
        `}
      >
        <NextIntlClientProvider messages={messages}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
        </Suspense>
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
