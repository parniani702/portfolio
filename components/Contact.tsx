"use client";

import React from "react";
import { motion } from "motion/react";
import { FaPaperPlane } from "react-icons/fa";
import { sendEmail } from "@/action/sendEmail";

export default function Contact() {

  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      id="contact"
      className="mb-20 sm:mb-28 flex flex-col items-center justify-center"
    >
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="font-medium text-3xl my-10"
      >
        Contact Me
      </motion.h1>
      <p className="text-gray-700 w-[20rem] sm:w-auto">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:parniani702@gmail.com">
          parniani702@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form action={
        (FormData) => {
            sendEmail(FormData)
        }
      } className="mt-10 flex flex-col sm:min-w-[40rem]">
        <input
          className="h-14 rounded-lg border border-black/10"
          type="email"
          required
          maxLength={300}
          name="email"
          placeholder="example@example.com"
        />
        <textarea
          required
          maxLength={500}
          className="h-52 my-3 rounded-lg border border-black/10 p-4"
          name="message"
          placeholder="Your Message"
        />
        <button
          className="h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition flex items-center gap-3 justify-center group cursor-pointer hover:scale-105"
          type="submit"
        >
          Submit <FaPaperPlane />{" "}
        </button>
      </form>
    </motion.section>
  );
}
