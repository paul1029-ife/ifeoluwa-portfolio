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
    <section id="experience" className="container px-4 py-16">
      <div className="relative mx-auto max-w-4xl">
        {/* Background gradient effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <motion.div
          className="relative text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Experience
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            My professional journey
          </p>
        </motion.div>

        <div className="relative mt-16 space-y-12">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 lg:left-1/2" />

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${
                index % 2 === 0
                  ? "lg:pr-16 lg:text-right"
                  : "lg:pl-16 lg:ml-auto"
              } lg:w-1/2`}
            >
              {/* Timeline dot */}
              <div
                className="absolute hidden h-4 w-4 rounded-full border-2 border-primary bg-background lg:block"
                style={{
                  top: "2rem",
                  [index % 2 === 0 ? "right" : "left"]: "-2rem",
                }}
              />

              <div className="group rounded-xl bg-card p-6 shadow-lg transition-all hover:shadow-xl">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold">{experience.title}</h3>
                  <ExternalLink className="h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>

                <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Building2 className="h-4 w-4" />
                    {experience.company}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {experience.period}
                  </div>
                </div>

                <p className="mt-4 text-muted-foreground">
                  {experience.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <ul className="mt-4 space-y-2">
                  {experience.highlights.map((highlight, i) => (
                    <motion.li
                      key={highlight}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <BadgeCheck className="h-4 w-4 text-primary" />
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
