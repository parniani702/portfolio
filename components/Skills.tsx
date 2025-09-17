"use client";

import { skillsData } from "@/lib/data";
import React from "react";
import { motion } from "motion/react";

export default function Skills() {
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };
  return (
    <section
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 mx-auto my-20"
    >
      <motion.h1 initial={{scale: 0}} animate={{scale: 1}} className="font-medium text-3xl my-10">My Skills</motion.h1>
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-wrap justify-center  gap-2 text-lg text-gray-800"
      >
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white border border-black/[0.1] rounded-xl px-5"
            key={index}
            variants={item}
          >
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
