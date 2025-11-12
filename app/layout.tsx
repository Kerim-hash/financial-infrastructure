import { ReactNode } from "react";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  display: "swap",
});

type Props = {
  children: ReactNode;
};

export default function BaseLayout({ children }: Props) {
  return (
    <html lang="ru" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Финансовая инфраструктура</title>
        <meta property="og:title" content="FastGuard - Secure VPN" />
        <meta
          property="og:description"
          content="Эффективная поддержка бизнеса, предпринимательства, трейдинга, а также сфер торговли и услуг всех ключевых направлений, включая работу с национальными проектами, международное сотрудничество и глобальную поддержку, обеспечит условия для развития и достижения целей пользователей"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/contact.png" />
        <meta name="format-detection" content="telephone=no" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/logo.png"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/logo.png"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body
        suppressHydrationWarning
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased
          font-[geistMono]
        `}
      >
        {children}
      </body>
    </html>
  );
}
