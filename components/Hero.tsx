"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { FaArrowRight } from "react-icons/fa";

export function Hero() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/100 to-white/10 pb-2">
            Ayush Kumar Sahu
        </div>
        <div className="font-extralight text-xl md:text-2xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/100 to-white/10">
            Game Dev And Designer
        </div>
        <p className="font-normal text-base text-neutral-300 max-w-lg pt-4 mx-auto pb-10 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum qui corporis veritatis nisi labore ad reprehenderit animi? Iste, debitis nihil atque, corrupti assumenda magni incidunt, veniam ipsum voluptates omnis porro?
        </p>
        <a href="ayush-sahu.pdf" className="cursor-pointer">
            <button className="flex items-center bg-gradient-to-b from-white/100 to-white/20 rounded-full w-fit font-bold dark:text-black px-4 py-2 gap-4">
            Resume <FaArrowRight />
            </button>
        </a>
      </motion.div>
    </AuroraBackground>
  );
}
