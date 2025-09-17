"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { about } from "@/lib/data";
import Link from "next/link";
import {BsArrowRight, BsLinkedin} from 'react-icons/bs'
import {HiDownload} from 'react-icons/hi'
import { FaGithubSquare } from "react-icons/fa";
import { useRouter } from "next/navigation";



export default function Intro() {
  const router = useRouter()
  console.log(router)
  return (
    <section id="home" className="scroll-mt-100">
      <div className="flex items-center justify-center flex-col">
        <div className="">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.2,
            }}
            className="relative"
          >
            <Image
              src="/profile.jpg"
              alt="Arash Parniani | آرش پرنیانی"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full object-cover  border-2 border-white shadow-xl"
            />
            <motion.span initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }} className="text-3xl absolute bottom-0">👋🏻</motion.span>
          </motion.div>
        </div>

        <motion.p initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} className="mt-10 text-xl text-center max-w-[470px]">
          {about}
        </motion.p>

        <motion.div initial={{x: -100, opacity: 0}} animate={{x: 0, opacity: 1}} className="mt-5 flex flex-wrap items-center justify-center gap-2">
          <Link className="hover:scale-95 transition bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full" href="#contact">
            Contect me here
            <BsArrowRight />
          </Link>
          <a href="/CV.pdf" download className="text-gray-900 hover:scale-95 transition bg-white px-7 py-3 flex items-center gap-2 rounded-full">Download CV <HiDownload /></a>
          <a href="https://www.linkedin.com/in/arashparniani/" className="bg-white p-4 hover:scale-95 transition text-gray-700 flex items-center gap-2 rounded-full"><BsLinkedin /></a>
          <a href="https://github.com/parniani702" className="bg-white p-4 hover:scale-95 transition text-gray-700 flex items-center gap-2 rounded-full"><FaGithubSquare /></a>
        </motion.div>
      </div>
    </section>
  );
}
