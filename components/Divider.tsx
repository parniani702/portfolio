"use client";

import React from 'react'
import { motion } from 'motion/react'

export default function Divider() {
  return (
    <motion.div initial={{y: -100, opacity: 0}} animate={{y: 0, opacity: 1}} className='bg-gray-200 my-20 h-12 w-5 mx-auto rounded-full items-center justify-center hidden sm:flex'>
        <div className="w-3 h-3 bg-gray-600 rounded-full animate-bounce"></div>
    </motion.div>
  )
}
