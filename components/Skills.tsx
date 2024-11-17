"use client";

import { div } from "framer-motion/client";
import { HoverEffect } from "./ui/card-hover-effect";

export function SkillsCards() {
  return (
    <div className="bg-black">
    <div className=" max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/100 to-white/30 pb-4">
        My Skills
      </h1>
        <div className="max-w-7xl mx-auto px-8">
        <HoverEffect items={projects} />
        </div>
    </div>
    </div>    
  );
}
export const projects = [
  {
    title: "C++",
    description:
      "C++ is a High-level programming language used to create computer programs, and is one of the most used language in game development.",
    link: "https://www.w3schools.com/cpp/",
  },
  {
    title: "C#",
    description:
      "C# (C-Sharp) is a programming language developed by Microsoft that runs on the .NET Framework.C# is used to develop web apps, desktop apps, mobile apps, games and much more.",
    link: "https://www.w3schools.com/cs/index.php",
  },
  {
    title: "Unreal Engine",
    description:
      "Unreal Engine is built by developers, for developers, with fair terms for all. Because everyone with an idea deserves to use the world’s most open, advanced real-time creation tool to bring it to life.",
    link: "https://www.unrealengine.com/en-US",
  },
  {
    title: "Unity 3D",
    description:
      "Create and grow real-time 3D games, apps, and experiences for entertainment, film, automotive, architecture, and more.",
    link: "https://unity.com",
  },
  {
    title: "Blender 3D",
    description:
      "Blender is a free and open-source 3D computer graphics software tool set that runs on Windows, MacOS, BSD, Haiku, IRIX and Linux. It is used for creating animated films, visual effects, art, 3D-printed models, motion graphics, interactive 3D applications, virtual reality, and, formerly, video games.",
    link: "https://www.blender.org",
  },
  {
    title: "Github",
    description:
      "GitHub is a developer platform that allows developers to create, store, manage and share their code. It is a pltform for version control and uses git.",
    link: "https://github.com",
  },
];
