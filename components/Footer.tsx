"use client";

import Link from "next/link";
import React from "react";
import { useLocale } from "next-intl";

const FooterPage = () => {
  const locale = useLocale() as "en" | "ru";

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

  return (
    <footer className="py-8 bg-muted-foreground text-[#CCCCCC]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between mb-8">
          {/* Contact Info */}
          <div className="flex-1 mb-6 lg:mb-0 text-secondary">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              {locale === "ru"
                ? "Контактная информация"
                : "Contact Information"}
            </h2>
            <p className="mb-3 flex gap-4">
              <strong>{locale === "ru" ? "Адрес:" : "Address:"}</strong>{" "}
              <span>г.Бишкек, Боконбаева 113</span>
            </p>

            <div className="mb-3 flex gap-4">
              <strong>Email:</strong>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:contact@infinance.kg"
                  className="hover:underline"
                >
                  contact@infinance.kg
                </a>
                <a
                  href="mailto:llcinfinance@gmail.com"
                  className="hover:underline"
                >
                  llcinfinance@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 mb-6 lg:mb-0 text-secondary">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              {locale === "ru" ? "Навигация" : "Navigation"}
            </h2>
            <ul id="navbar">
              {navLinks.map((item) => (
                <li className="mb-3" key={item.key}>
                  <Link
                    href={`/${locale}/${item.link}`}
                    className="hover:underline"
                  >
                    {item.label[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              {locale === "ru" ? "Мы в соцсетях" : "Follow Us"}
            </h2>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://linkedin.com"
                className="flex items-center justify-center w-10 h-10 bg-primary rounded-full transition-transform transform hover:scale-105"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-6 h-6" src="/linkedin.svg" alt="LinkedIn" />
              </a>
              <a
                href="https://twitter.com"
                className="flex items-center justify-center w-10 h-10 bg-primary rounded-full transition-transform transform hover:scale-105"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-6 h-6" src="/twitter.svg" alt="Twitter" />
              </a>
              <a
                href="https://facebook.com"
                className="flex items-center justify-center w-10 h-10 bg-primary rounded-full transition-transform transform hover:scale-105"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-6 h-6" src="/facebook.svg" alt="Facebook" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
