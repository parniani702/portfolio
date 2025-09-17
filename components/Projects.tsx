"use client";

import { projectsData } from "@/lib/data";
import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "motion/react";
import { useScroll } from "motion/react";
import Link from "next/link";

export default function Projects() {
  return (
    <motion.section
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      id="projects"
      className="flex items-center justify-center flex-col scroll-mt-28"
    >
      <h2 className="text-3xl font-medium my-10">My Projects</h2>
      <div>
        {projectsData.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </div>
    </motion.section>
  );
}

type ProjectProp = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl, href }: ProjectProp) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  return (
    <motion.section
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      ref={ref}
      className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 even:pl-8 hover:bg-gray-200 transition cursor-pointer group"
    >
      <Link href={href}>
        <div className="pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full text-white"
              >
                {tag}
              </li>
            ))}
          </ul>
          <Image
            src={imageUrl}
            alt={title}
            width={300}
            height={200}
            quality={95}
            className="absolute w-[0] group-hover:-translate-x-3 transition group-hover:-rotate-2 top-8 -right-40 sm:w-[28.25rem] rounded-t-lg shadow-2xl even:-right-[initial] "
          />
        </div>
      </Link>
    </motion.section>
  );
}
