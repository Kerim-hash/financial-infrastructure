"use client";

import React, { FC, useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import LocaleSwitcher from "./LocaleSwitcher";
import { useLocale } from "next-intl";
const Header: FC = () => {
  const [currentPath, setCurrentPath] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const locale = useLocale() as "en" | "ru";

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Только на клиенте доступен router
  const router = usePathname();
  const normalizedPath = router.replace(/\/$/, "");

  useEffect(() => {
    if (isClient) {
      setCurrentPath(normalizedPath);
    }
  }, [isClient, normalizedPath]);

  const navLinks = [
    { key: "main", label: { en: "Main", ru: "Главная" }, link: "" },
    {
      key: "about",
      label: { en: "About Us", ru: "О компании" },
      link: "about",
    },
    {
      key: "contact",
      label: { en: "Contact", ru: "Контакты" },
      link: "contact",
    },
  ];

  useEffect(() => {
    // Проверка клика вне меню
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false); // Закрываем меню
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.classList.add("overflow-hidden"); // Убираем скролл
    } else {
      document.body.classList.remove("overflow-hidden"); // Возвращаем скролл
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  if (!isClient) {
    return null;
  }

  return (
    <header className="py-6 bg-foreground px-0 md:px-5">
      <div className="wrapper container flex justify-between items-center ">
        {/* Логотип и кнопка-бургер */}
        <div className="flex items-center gap-8 justify-around md:justify-between lg:justify-normal w-full lg:w-auto">
          <Link href="/">
            <Image src={"/Logo.svg"} width={215} height={56} alt="logo" />
          </Link>
          <button
            className="lg:hidden block p-2 text-primary"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {/* Иконка для бургер-меню */}
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>

        {/* Телефон (для больших экранов) */}
        <div className="flex gap-[24px]">
          <p className="text-white text-base font-lato hidden lg:block">
            {locale === "ru" ? "Бишкек, Кыргызстан" : "Bishkek, Kyrgyzstan"}
          </p>
          <a
            href="mailto:info@gmail.com"
            className="text-white text-base font-lato hidden lg:block"
          >
            info@gmail.com
          </a>
          <a
            href="tel:+996999990000"
            className="text-white text-base font-lato hidden lg:block"
          >
            +996 999 990 000
          </a>
        </div>
      </div>

      {/* Мобильное меню */}
      <div
        ref={menuRef}
        className={clsx(
          "fixed top-0 right-0 h-screen w-3/4 max-w-xs bg-foreground shadow-lg z-50 transition-transform duration-300 lg:hidden",
          { "translate-x-0": isMenuOpen, "translate-x-full": !isMenuOpen }
        )}
      >
        <div className="flex flex-col h-full">
          {/* Кнопка закрытия */}
          <button
            className="self-end p-4 text-white"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>

          {/* Навигация */}
          <nav className="flex flex-col gap-4 px-6">
            {navLinks.map((item) => {
              const href = `/${locale}/${item.link}`;
              const isActive = currentPath === href;
              return (
                <Link
                  key={item.key}
                  href={href}
                  className={clsx(
                    "text-white desc2 transition-colors duration-200",
                    {
                      "!text-primary": isActive,
                      "hover:text-accent-foreground": !isActive,
                    }
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label[locale]}
                </Link>
              );
            })}
            <LocaleSwitcher />
          </nav>

          {/* Телефон и переключение языка */}
          <div className="mt-auto px-6 py-4 border-t">
            <a
              href="tel:+996999990000"
              className="block text-white text-lg font-lato mb-4"
            >
              +996 999 990 000
            </a>
          </div>
        </div>
      </div>

      {/* Навигация для больших экранов */}
      <div className="wrapper container md:flex justify-between mt-1 items-center hidden lg:flex">
        <nav className="flex gap-8">
          {navLinks.map((item) => {
            const href = `/${locale}/${item.link}`;
            const isActive = currentPath === href;
            return (
              <Link
                key={item.key}
                href={href}
                className={clsx(
                  "text-base text-white transition-colors duration-200",
                  {
                    "!text-primary": isActive,
                    "hover:text-accent-foreground": !isActive,
                  }
                )}
              >
                {item.label[locale]}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-8">
          <LocaleSwitcher />
          <a href="tel:+996999990000" className="btn">
            {locale === "ru" ? "Связаться" : "Contact"}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
