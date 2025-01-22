"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Building2, Calendar, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative w-full overflow-hidden py-16 md:py-24"
    >
      {/* Enhanced background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-96 w-96 translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="relative"
        >
          {/* Header */}
          <motion.div className="text-center" variants={itemVariants}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Experience
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              My professional journey
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative mt-16">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-border to-transparent md:left-1/2" />

            {/* Experience cards */}
            <div className="space-y-16">
              {experiences.map((experience, index) => (
                <div key={experience.title} className="relative">
                  <motion.div
                    variants={itemVariants}
                    className={`relative mx-auto flex w-full flex-col md:w-[calc(50%-2rem)] ${
                      index % 2 === 0
                        ? "md:mr-auto md:pr-8"
                        : "md:ml-auto md:pl-8"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute top-8 hidden h-4 w-4 rounded-full border-4 border-primary bg-background md:block ${
                        index % 2 === 0 ? "-right-10" : "-left-10"
                      }`}
                    />

                    {/* Card */}
                    <Card className="group relative overflow-hidden p-6 transition-all hover:shadow-lg">
                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                      {/* Content */}
                      <div className="relative">
                        {/* Header */}
                        <div className="flex items-center justify-between gap-4">
                          <h3 className="text-xl font-semibold tracking-tight">
                            {experience.title}
                          </h3>
                          <ExternalLink className="h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100" />
                        </div>

                        {/* Company and Period */}
                        <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1.5">
                            <Building2 className="h-4 w-4" />
                            <span>{experience.company}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-4 w-4" />
                            <span>{experience.period}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                          {experience.description}
                        </p>

                        {/* Skills */}
                        <div className="mt-4 flex flex-wrap gap-2">
                          {experience.skills.map((skill) => (
                            <span
                              key={skill}
                              className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        {/* Highlights */}
                        <ul className="mt-6 space-y-3">
                          {experience.highlights.map((highlight, i) => (
                            <motion.li
                              key={highlight}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.3,
                                delay: 0.2 + i * 0.1,
                              }}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <BadgeCheck className="h-5 w-5 shrink-0 text-primary" />
                              <span className="leading-tight">{highlight}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ExperienceSection;
