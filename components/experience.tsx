"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  BadgeCheck,
  Building2,
  Calendar,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

const experiences = [
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
  {
    title: "Web3 Development",
    company: "Self-Learning",
    period: "2023",
    description:
      "Learning blockchain development with Solidity and building DApps",
    skills: ["Solidity", "Web3.js", "Smart Contracts", "DApps"],
    highlights: [
      "Created 2 decentralized applications",
      "Deployed smart contracts",
      "Integrated with MetaMask",
    ],
    color: "from-orange-500/10 to-red-500/10",
  },
];

export function ExperienceSection() {
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
            Experience
          </h2>
          <p className="mt-4 text-muted-foreground">
            My journey through tech and development
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden border-none bg-gradient-to-br from-background to-background p-1 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative rounded-lg bg-card p-6">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
                    {/* Left column - Title and Company */}
                    <div className="lg:w-1/3">
                      <div className="flex items-start justify-between">
                        <h3 className="text-xl font-semibold tracking-tight">
                          {experience.title}
                        </h3>
                        <ArrowUpRight className="h-5 w-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </div>

                      <div className="mt-2 flex flex-col gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Building2 className="h-4 w-4" />
                          <span>{experience.company}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          <span>{experience.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right column - Content */}
                    <div className="lg:w-2/3">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {experience.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
                          >
                            {skill}
                            <ChevronRight className="h-3 w-3" />
                          </span>
                        ))}
                      </div>

                      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        {experience.highlights.map((highlight, i) => (
                          <motion.li
                            key={highlight}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            className="flex items-start gap-2"
                          >
                            <BadgeCheck className="h-5 w-5 shrink-0 text-primary" />
                            <span className="text-sm leading-tight text-muted-foreground">
                              {highlight}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
