"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Building2, Calendar, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer Intern",
    company: "Tech Company",
    period: "2023 - Present",
    description:
      "Working on building responsive web applications using React and Next.js",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Developed 5+ responsive web applications",
      "Improved site performance by 40%",
      "Collaborated with 10+ team members",
    ],
  },
  {
    title: "MERN Stack Learning",
    company: "Self-Learning",
    period: "2023",
    description:
      "Developing full-stack applications using MongoDB, Express, React, and Node.js",
    skills: ["MongoDB", "Express", "React", "Node.js"],
    highlights: [
      "Built 3 full-stack applications",
      "Implemented REST APIs",
      "Deployed on cloud platforms",
    ],
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
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-8 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Background gradient */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute left-[10%] top-0 h-48 w-48 rounded-full bg-primary/10 blur-3xl md:h-72 md:w-72" />
            <div className="absolute right-[10%] bottom-0 h-48 w-48 rounded-full bg-primary/10 blur-3xl md:h-72 md:w-72" />
          </div>

          {/* Header */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Experience
            </h2>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              My professional journey
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative mt-8 md:mt-16">
            {/* Timeline line - Only visible on large screens */}
            <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 md:block md:left-1/2" />

            {/* Experience cards */}
            <div className="space-y-8 md:space-y-12">
              {experiences.map((experience, index) => (
                <div key={experience.title} className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative mx-auto w-full md:w-5/12 ${
                      index % 2 === 0
                        ? "md:mr-auto md:pr-8"
                        : "md:ml-auto md:pl-8"
                    }`}
                  >
                    {/* Timeline dot - Only visible on large screens */}
                    <div
                      className={`absolute top-8 hidden h-4 w-4 rounded-full border-2 border-primary bg-background md:block ${
                        index % 2 === 0
                          ? "right-0 translate-x-1/2"
                          : "left-0 -translate-x-1/2"
                      }`}
                    />

                    {/* Card */}
                    <div className="group relative rounded-lg bg-card p-4 shadow-lg transition-shadow hover:shadow-xl sm:p-6">
                      {/* Header */}
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-lg font-semibold sm:text-xl">
                          {experience.title}
                        </h3>
                        <ExternalLink className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100 sm:h-5 sm:w-5" />
                      </div>

                      {/* Company and Period */}
                      <div className="mt-2 flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          {experience.company}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {experience.period}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                        {experience.description}
                      </p>

                      {/* Skills */}
                      <div className="mt-3 flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full bg-primary/10 px-2.5 py-1 text-xs text-primary sm:text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Highlights */}
                      <ul className="mt-4 space-y-2">
                        {experience.highlights.map((highlight, i) => (
                          <motion.li
                            key={highlight}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
                            className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm"
                          >
                            <BadgeCheck className="h-4 w-4 shrink-0 text-primary" />
                            {highlight}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
