import { HeroSection } from "@/components/hero";
import { SkillsSection } from "@/components/skills";
import { ExperienceSection } from "@/components/experience";
import { ProjectsSection } from "@/components/projects";
import { ContactSection } from "@/components/contact";
import { AboutSection } from "@/components/about";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col gap-20 pb-20">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
