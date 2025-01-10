'use client';

import React, { FC, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface GoalsProps {
  translations: {
    title: string;
    desc: string;
    list: { title: string; desc: string }[];
  };
}

const Goals: FC<GoalsProps> = ({ translations }) => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const listAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2, // Staggered animations
        duration: 0.6,
      },
    }),
  };

  return (
    <motion.section
      ref={sectionRef}
      id="goals-section"
      className="bg-primary text-white p-5 md:p-16 rounded-tl-lg rounded-tr-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Title Section */}
      <div className="flex items-center mb-[80px]">
        <motion.h2
          className="title tracking-tightest font-bold text-[2rem] md:text-[4rem]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : -50 }}
          transition={{ duration: 0.8 }}
        >
          {translations.title}
        </motion.h2>
        <motion.div
          className="w-1/2"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: visible ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="w-2/3 h-1 bg-white mb-8 block ml-auto"></span>
        </motion.div>
      </div>

      {/* Description */}
      <motion.p
        className="desc2 text-white mb-[80px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
        transition={{ duration: 0.8 }}
      >
        {translations.desc}
      </motion.p>

      {/* Goals List */}
      <div className="flex flex-col md:flex-row justify-between gap-[24px] min-h-[440px]">
        {translations.list.map((item, index) => (
          <motion.div
            key={index}
            className="group flex-1 border px-[24px] py-[40px] rounded-lg border-accent-foreground transition-colors hover:bg-accent-foreground"
            initial="hidden"
            animate={visible ? "visible" : "hidden"}
            variants={listAnimation}
            custom={index} // Pass the index to the animation
          >
            <h3 className="text-lg font-semibold flex items-center gap-3 group-hover:text-black">
              <span className="h-4 w-4 bg-white group-hover:bg-black rounded-full"></span>
              {item.title}
            </h3>
            <p className="desc1 mt-2 text-[#FFFFFF99] group-hover:text-black">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Goals;
