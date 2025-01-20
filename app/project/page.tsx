"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code2,
  Globe,
  Blocks,
  CheckCircle2,
  Clock,
  Rocket,
  Target,
  Users,
} from "lucide-react";

const projectTimeline = {
  title: "Aje Marketplace",
  description: "Building a decentralized marketplace from concept to launch",
  duration: "6 months",
  team: "4 developers",
  phases: [
    {
      title: "Discovery & Planning",
      icon: Target,
      date: "Month 1",
      services: ["Consultation"],
      description:
        "Initial planning, architecture design, and technical strategy development",
      achievements: [
        "Defined technical architecture",
        "Created project roadmap",
        "Established development standards",
      ],
    },
    {
      title: "Design Implementation",
      icon: Blocks,
      date: "Month 2",
      services: ["UI/UX Implementation"],
      description: "Converting design mockups into responsive interfaces",
      achievements: [
        "Implemented design system",
        "Created reusable components",
        "Built responsive layouts",
      ],
    },
    {
      title: "Core Development",
      icon: Code2,
      date: "Month 3-4",
      services: ["Frontend Development", "Full Stack Development"],
      description: "Building the marketplace core functionality",
      achievements: [
        "Developed user authentication",
        "Implemented product listing",
        "Created search functionality",
      ],
    },
    {
      title: "Web3 Integration",
      icon: Globe,
      date: "Month 5",
      services: ["Web3 Development"],
      description: "Integrating blockchain functionality and smart contracts",
      achievements: [
        "Wallet integration",
        "Smart contract deployment",
        "Transaction handling",
      ],
    },
    {
      title: "Launch & Optimization",
      icon: Rocket,
      date: "Month 6",
      services: ["Mobile Development", "Consultation"],
      description:
        "Final testing, optimization, and progressive web app deployment",
      achievements: [
        "Performance optimization",
        "PWA implementation",
        "Security auditing",
      ],
    },
  ],
};

const ProjectTimeline = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      {/* Project Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent mb-4">
          {projectTimeline.title}
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          {projectTimeline.description}
        </p>
        <div className="flex justify-center gap-8">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <span>{projectTimeline.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <span>{projectTimeline.team}</span>
          </div>
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 h-full w-px bg-border -translate-x-1/2" />

        {/* Timeline items */}
        {projectTimeline.phases.map((phase, index) => {
          const Icon = phase.icon;
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative grid grid-cols-2 gap-8 mb-16 ${
                isEven ? "" : "direction-rtl"
              }`}
            >
              {/* Timeline content */}
              <div className={`${isEven ? "text-right" : "col-start-2"}`}>
                <Card className="relative group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-muted-foreground">
                        {phase.date}
                      </span>
                    </div>
                    <CardTitle className="text-xl mb-2">
                      {phase.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {phase.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Services Used */}
                      <div className="flex flex-wrap gap-2">
                        {phase.services.map((service) => (
                          <span
                            key={service}
                            className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                      {/* Achievements */}
                      <ul className="space-y-2">
                        {phase.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="flex items-center text-sm gap-2"
                          >
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Timeline node */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary"
                whileInView={{
                  scale: [1, 1.5, 1],
                  transition: { duration: 0.5, delay: index * 0.2 },
                }}
                viewport={{ once: true }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectTimeline;
