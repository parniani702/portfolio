"use client";

import React from "react";
import { motion } from "motion/react";

export default function About() {
  return (
    <motion.section
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      id="about"
      className="flex items-center justify-center flex-col mb-28 scroll-mt-28"
    >
      <h2 className="font-medium text-3xl my-4">About Me</h2>
      <p className="max-w-[700px] font-mono text-center">
        Hi! I’m a <span className="bg-yellow-200">Front-End</span> Devloper and
        Computer Science student. I mostly work with React and Next.js, building
        fast, modern, and user-friendly interfaces. I’m always eager to learn
        new tools and technologies to make my projects more optimized and
        professional. My tech stack includes: <strong>Zustand</strong>,{" "}
        <strong>TanStack Query</strong>, <strong>BetterAuth</strong>,{" "}
        <strong>Drizzle ORM</strong>, <strong>Radix UI</strong>, and{" "}
        <strong>shadcn/ui</strong>.
      </p>
    </motion.section>
  );
}
