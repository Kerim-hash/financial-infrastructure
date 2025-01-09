'use client';

import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TrustProps {
  translations: {
    title: string;
    list: { title: string; desc: string }[];
  };
}

const Trust: FC<TrustProps> = ({ translations }) => {
  const [visible, setVisible] = useState(false);

  // Function to handle visibility on scroll
  const handleScroll = () => {
    const section = document.getElementById("trust-section");
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setVisible(true); // Set visible to true when section is in view
      }
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Call handleScroll once on mount to check if it's visible already
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  return (
    <div
      id="trust-section"
      className="container mt-[60px] md:mt-[80px] mb-[80px] md:mb-[120px] px-5 md:px-0"
    >
      {/* Title Section with Animated Borders */}
      <div className="flex items-center gap-10">
        <motion.span
          className="hidden md:block flex-grow border-t-4 border-primary"
          initial={{ scaleX: 0 }}
          animate={{
            scaleX: visible ? 1 : 0,
            transition: { duration: 0.5 },
          }}
        />
        <motion.h2
          className="text-primary title mb-2 tracking-tightest font-normal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
          transition={{ duration: 0.6 }}
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
        />
      </div>

      {/* List Items Section */}
      <div className="flex flex-wrap justify-between mt-[110px] space-y-10 md:space-y-0">
        {Array.isArray(translations.list) &&
          translations.list.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center space-y-4 w-full sm:w-1/2 md:w-[23%]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2, // Staggering animation
              }}
            >
              <Image src={`/trust${index + 1}.png`} alt="trust" width={70} height={70} />
              <h5 className="text-lg tracking-tightest text-primary font-semibold">{item.title}</h5>
              <p className="desc1 text-secondary">{item.desc}</p>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default Trust;
