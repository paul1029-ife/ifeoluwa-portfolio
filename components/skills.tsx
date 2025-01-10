"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const skills = [
  {
    name: "React",
    category: "Frontend",
    proficiency: 90,
    icon: "⚛️",
  },
  {
    name: "Next.js",
    category: "Frontend",
    proficiency: 85,
    icon: "▲",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    proficiency: 85,
    icon: "📘",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    proficiency: 90,
    icon: "🎨",
  },
  {
    name: "Node.js",
    category: "Backend",
    proficiency: 80,
    icon: "🟢",
  },
  {
    name: "Express",
    category: "Backend",
    proficiency: 75,
    icon: "🚂",
  },
  {
    name: "MongoDB",
    category: "Backend",
    proficiency: 75,
    icon: "🍃",
  },
  {
    name: "REST APIs",
    category: "Backend",
    proficiency: 85,
    icon: "🔌",
  },
  {
    name: "Solidity",
    category: "Web3",
    proficiency: 70,
    icon: "⛓️",
  },
  {
    name: "Ethers.js",
    category: "Web3",
    proficiency: 75,
    icon: "🌐",
  },
  {
    name: "Web3.js",
    category: "Web3",
    proficiency: 70,
    icon: "🕸️",
  },
  {
    name: "Smart Contracts",
    category: "Web3",
    proficiency: 75,
    icon: "📝",
  },
];

const categories = ["Frontend", "Backend", "Web3"];

export function SkillsSection() {
  return (
    <section id="skills" className="container px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Skills
          </h2>
          <p className="mt-4 text-muted-foreground">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="mt-16 space-y-12">
          {categories.map((category, categoryIndex) => (
            <div key={category}>
              <motion.h3
                className="mb-6 text-xl font-semibold"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                {category}
              </motion.h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="group relative overflow-hidden p-4 transition-all hover:shadow-lg">
                        <div className="relative z-10">
                          <span className="mb-2 block text-2xl">
                            {skill.icon}
                          </span>
                          <h4 className="font-medium">{skill.name}</h4>
                          <div className="mt-2 h-1.5 w-full rounded-full bg-muted">
                            <div
                              className="h-full rounded-full bg-primary transition-all group-hover:bg-primary/80"
                              style={{ width: `${skill.proficiency}%` }}
                            />
                          </div>
                        </div>
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
