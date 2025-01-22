"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Blocks,
  Component,
  Palette,
  Library,
  Construction,
  Terminal,
  Globe,
  Server,
  Code2,
} from "lucide-react";

const skills = [
  {
    name: "React",
    category: "Frontend",
    proficiency: 90,
    icon: Component,
    technologies: ["Hooks", "Context", "Redux", "React Query"],
  },
  {
    name: "Next.js",
    category: "Frontend",
    proficiency: 85,
    icon: Blocks,
    technologies: ["App Router", "Server Components", "API Routes", "SSR"],
  },
  {
    name: "TypeScript",
    category: "Frontend",
    proficiency: 85,
    icon: Code2,
    technologies: ["Types", "Interfaces", "Generics", "Utility Types"],
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    proficiency: 90,
    icon: Palette,
    technologies: [
      "Responsive Design",
      "Custom Themes",
      "Components",
      "Animations",
    ],
  },
  {
    name: "Node.js",
    category: "Backend",
    proficiency: 80,
    icon: Server,
    technologies: ["Express", "Middleware", "Authentication"],
  },
  {
    name: "Database",
    category: "Backend",
    proficiency: 75,
    icon: Library,
    technologies: ["MongoDB", "SQL", "Prisma"],
  },
  {
    name: "Development Tools",
    category: "Tools",
    proficiency: 90,
    icon: Construction,
    technologies: ["Git", "VS Code", "npm", "Webpack"],
  },
  {
    name: "Testing",
    category: "Tools",
    proficiency: 80,
    icon: Terminal,
    technologies: ["Jest", "React Testing Library", "Cypress", "Storybook"],
  },
  {
    name: "Web Standards",
    category: "Frontend",
    proficiency: 90,
    icon: Globe,
    technologies: ["HTML5", "CSS3", "ES6+", "Accessibility"],
  },
];

const categories = ["Frontend", "Backend", "Tools"];

export function SkillsSection() {
  return (
    <section id="skills" className="container px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-muted-foreground">
            My technical expertise as a Frontend Developer
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
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                      <Card className="group relative overflow-hidden p-6 transition-all hover:shadow-lg">
                        <div className="relative z-10">
                          <span className="mb-4 flex items-center text-primary">
                            {React.createElement(skill.icon, {
                              size: 24,
                              className:
                                "transition-transform group-hover:scale-110",
                            })}
                          </span>
                          <h4 className="font-medium">{skill.name}</h4>
                          <div className="mt-2 h-1.5 w-full rounded-full bg-muted">
                            <div
                              className="h-full rounded-full bg-primary transition-all group-hover:bg-primary/80"
                              style={{ width: `${skill.proficiency}%` }}
                            />
                          </div>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {skill.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                              >
                                {tech}
                              </span>
                            ))}
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
