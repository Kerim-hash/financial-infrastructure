"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface OurPlatformProps {
  translations: {
    title: string;
    subtitle: string;
    desc: string;
  };
}

const OurPlatform: React.FC<OurPlatformProps> = ({ translations }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("our-platform-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="our-platform-section"
      className="my-[60px] md:my-[80px]"
    >
      <div className="container px-5 md:px-0">
        <div
          className={`flex items-center md:gap-4 scroll-animate ${
            visible ? "visible" : ""
          }`}
        >
          <motion.h2
            className="text-primary title mb-2 hover-border"
            whileHover={{
              scaleX: 1.1,
              transition: { duration: 0.3 },
            }}
          >
            {translations.title}
          </motion.h2>
          <motion.span
            className="hidden md:block flex-grow border-t-4 border-primary"
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: visible ? 1 : 0,
              transition: { duration: 0.5 },
            }}
            whileHover={{
              scaleX: 1.1,
              transition: { duration: 0.3 },
            }}
          />
        </div>

        <div
          className={`flex items-center md:gap-4 md:mt-9 scroll-animate ${
            visible ? "visible" : ""
          }`}
        >
          <motion.span
            className="flex-grow border-t-4 border-primary"
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: visible ? 1 : 0,
              transition: { duration: 0.5 },
            }}
            whileHover={{
              scaleX: 1.1,
              transition: { duration: 0.3 },
            }}
          />
          <motion.h3
            className="text-primary title mb-4 hover-border"
            whileHover={{
              scaleX: 1.1,
              transition: { duration: 0.3 },
            }}
          >
            {translations.subtitle}
          </motion.h3>
        </div>

        <p className="desc2 text-secondary font-bold max-w-[630px] ml-auto mt-[60px] md:mt-[80px]">
          {translations.desc}
        </p>
      </div>
    </section>
  );
};

export default OurPlatform;
