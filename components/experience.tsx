"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  BadgeCheck,
  Building2,
  Calendar,
  ArrowUpRight,
  ChevronRight,
  GraduationCap,
  LucideIcon,
} from "lucide-react";

interface ExperienceData {
  title: string;
  company?: string;
  institution?: string;
  period: string;
  description: string;
  skills: string[];
  highlights: string[];
  color: string;
}

interface CustomTabProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  icon: LucideIcon;
}

interface ContentCardProps {
  data: ExperienceData;
  index: number;
}

const experiences: ExperienceData[] = [
  {
    title: "Frontend Developer Intern",
    company: "Aje",
    period: "2024 - Present",
    description: "Working on building responsive web applications Next.js",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Developed the main Aje web applications",
      "Improved site performance by 20%",
      "Collaborated with 5+ team members",
    ],
    color: "from-blue-500/10 to-purple-500/10",
  },
  {
    title: "Frontend Developer",
    company: "Nibo",
    period: "2024 - Present",
    description:
      "Integrating third party api's (Google maps) and CRUD operations with GraphQl",
    skills: ["MongoDB", "Express", "React", "Node.js"],
    highlights: [
      "Built a modern PWA",
      "Implemented Appolo GraphQl",
      "Deployed on cloud platforms",
    ],
    color: "from-emerald-500/10 to-teal-500/10",
  },
];

const education: ExperienceData[] = [
  {
    title: "Bachelor's Degree - Computer Science",
    institution: "University of Lagos",
    period: "2023 - 2027",
    description:
      "Currently in second year, focusing on computer science fundamentals and software development.",
    skills: [
      "Data Structures",
      "Algorithms",
      "Software Engineering",
      "Web Development",
    ],
    highlights: [
      "Maintaining strong academic performance",
      "Active member of tech community",
      "Participating in coding competitions",
    ],
    color: "from-orange-500/10 to-red-500/10",
  },
];

const CustomTab: React.FC<CustomTabProps> = ({
  active,
  onClick,
  children,
  icon: Icon,
}) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-all
      ${
        active
          ? "bg-primary text-primary-foreground shadow-lg"
          : "bg-background text-muted-foreground hover:bg-muted"
      }`}
    type="button"
  >
    <Icon className="h-4 w-4" />
    {children}
  </button>
);

const ContentCard: React.FC<ContentCardProps> = ({ data, index }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: index * 0.1,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Card className="group relative overflow-hidden border-none bg-gradient-to-br from-background to-background p-1 shadow-xl">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${data.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        />
        <div className="relative rounded-lg bg-card p-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
            {/* Left column - Title and Institution */}
            <div className="lg:w-1/3">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold tracking-tight">
                  {data.title}
                </h3>
                <ArrowUpRight className="h-5 w-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="mt-2 flex flex-col gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  {data.company ? (
                    <>
                      <Building2 className="h-4 w-4" />
                      <span>{data.company}</span>
                    </>
                  ) : (
                    <>
                      <GraduationCap className="h-4 w-4" />
                      <span>{data.institution}</span>
                    </>
                  )}
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <span>{data.period}</span>
                </div>
              </div>
            </div>

            {/* Right column - Content */}
            <div className="lg:w-2/3">
              <motion.p
                variants={itemVariants}
                className="text-sm leading-relaxed text-muted-foreground"
              >
                {data.description}
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mt-4 flex flex-wrap gap-2"
              >
                {data.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
                  >
                    {skill}
                    <ChevronRight className="h-3 w-3" />
                  </span>
                ))}
              </motion.div>

              <motion.ul
                variants={itemVariants}
                className="mt-6 grid gap-3 sm:grid-cols-2"
              >
                {data.highlights.map((highlight) => (
                  <motion.li
                    key={highlight}
                    variants={itemVariants}
                    className="flex items-start gap-2"
                  >
                    <BadgeCheck className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm leading-tight text-muted-foreground">
                      {highlight}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">(
    "experience"
  );

  return (
    <section id="experience" className="relative w-full py-16 md:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_500px_at_50%_200px,var(--primary-color)/4%,transparent)]" />

      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Experience & Education
          </h2>
          <p className="mt-4 text-muted-foreground">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="mt-8 flex justify-center gap-4">
          <CustomTab
            active={activeTab === "experience"}
            onClick={() => setActiveTab("experience")}
            icon={Building2}
          >
            Experience
          </CustomTab>
          <CustomTab
            active={activeTab === "education"}
            onClick={() => setActiveTab("education")}
            icon={GraduationCap}
          >
            Education
          </CustomTab>
        </div>

        <div className="mt-16 grid gap-8">
          <AnimatePresence mode="wait">
            {activeTab === "experience"
              ? experiences.map((experience, index) => (
                  <ContentCard
                    key={experience.title}
                    data={experience}
                    index={index}
                  />
                ))
              : education.map((edu, index) => (
                  <ContentCard key={edu.title} data={edu} index={index} />
                ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
