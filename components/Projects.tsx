"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function Projects() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Dungeon Shooter",
    link: "https://drive.google.com/file/d/1yTPh3UPN9U_H9MZAAeG_m7ALT26WS9oU/view",
    thumbnail:
      "/demoimg.jpg",
  },
  {
    title: "Space Patrol",
    link: "https://drive.google.com/file/d/1F7riwlDqTvM7z9gUxT3OxpqTRDaLFOgE/view",
    thumbnail:
      "/demoimg.jpg",
  },
  {
    title: "Tank & Towers",
    link: "https://drive.google.com/file/d/1s9w9VginiX_mY02lsGhl3RhfpRU1T9-m/view?usp=sharing",
    thumbnail:
      "/demoimg.jpg",
  },

  {
    title: "Prison Escape",
    link: "https://drive.google.com/file/d/1pCy8KhfPo_zPC-lrPSUdke2dd2UqDiuv/view?usp=sharing",
    thumbnail:
      "/demoimg.jpg",
  },
  {
    title: "Arena Art",
    link: "https://www.behance.net/gallery/158556891/Game-Environment-Art-With-unreal-Engine",
    thumbnail:
      "/demoimg.jpg",
  },
  {
    title: "Roll The Ball",
    link: "https://drive.google.com/file/d/1m99isaQEskwEunP6iuGHWIfuU0yyP9uU/view?usp=sharing",
    thumbnail:
      "/demoimg.jpg",
  },
];
