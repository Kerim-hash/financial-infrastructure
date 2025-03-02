import { ReactNode } from "react";
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});
type Props = {
  children: ReactNode;
};

export default function BaseLayout({ children }: Props) {
  return (
    <html className="h-full" lang="ru">
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
          ${openSans.variable} 
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
