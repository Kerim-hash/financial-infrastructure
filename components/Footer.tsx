import Link from "next/link";
import React from "react";

const FooterPage = () => {
  return (
    <footer className="py-8 bg-muted-foreground text-[#CCCCCC]">
      <div className="container mx-auto px-6">
        <div
          className="flex flex-col lg:flex-row justify-between mb-8"
        >
          {/* Contact Info */}
          <div className="flex-1 mb-6 lg:mb-0 text-secondary">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Контактная информация
            </h2>
            <p className="mb-3">
              <strong>Адрес:</strong> г.Бишкек, Токтогула 45
            </p>
            <div className="mb-3">
              <strong>Телефон:</strong>
              <a href="tel:+996550600006" className="hover:underline">
                {" "}
                +996 502 155 122
              </a>
            </div>

            <div className="mb-3 flex gap-4">
              <strong>Email:</strong>
              <a href="mailto:nurlan@aig.kg" className="hover:underline">
                d.asanovdesign@gmail.com
              </a>
           </div>
          </div>

          <div className="flex-1 mb-6 lg:mb-0 text-secondary">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Навигация
            </h2>
            <ul id="navbar">
              <li className="mb-3">
                <Link href="/" className="hover:underline">
                  Главная
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/#advantage" className="hover:underline">
                  Преимущества
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/#contact" className="hover:underline">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Мы в соцсетях
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
