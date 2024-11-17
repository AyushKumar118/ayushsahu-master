import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Education() {
  const data = [
    {
      title: "2024 - Present",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-bold mb-2">
            Game Design Diploma
          </p>
          <p className="text-neutral-400">
            Gamer2maker, Virtual
          </p>
        </div>
      ),
    },
    {
      title: "2020-2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-bold mb-2">
            Bachelor of Engineering (B.E), Computer Science
          </p>
          <p className="text-neutral-400">
          PDEA COLLAGE OF ENGINEERING
          CGPA: 7.80/10
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
