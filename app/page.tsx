import { HeroSection } from "@/components/hero";
import { SkillsSection } from "@/components/skills";
import { ExperienceSection } from "@/components/experience";
import { ProjectsSection } from "@/components/projects";
import { ContactSection } from "@/components/contact";
import { AboutSection } from "@/components/about";
import { ServicesSection } from "@/components/services";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
