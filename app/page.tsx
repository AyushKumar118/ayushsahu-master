import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { SkillsCards } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Education />
      <Projects />
      <SkillsCards />
      <Footer />
    </>
  );
}
