import React from "react";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <>
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-4">
          Let&apos;s Get Connected! <br /> To Work Together.
        </h1>
        <p className="mt-4 font-normal text-base text-rose-500 max-w-lg text-center mx-auto">
          <a href="mailto:ayushsahu.ak@gmail.com" className="text-blue-400">ayushsahu.ak@gmail.com</a> | +91 7620306402 | Pune
        </p>
      </div>
    </div>
    <div className="text-center -mt-24 relative p-4 text-neutral-500">copyright @ 2024 Ayush Sahu</div>
    </>
  );
}
