/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Code2,
  Layout,
  Smartphone,
  Globe,
  Blocks,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces using React, Next.js, and TypeScript",
    icon: Layout,
    features: [
      "Responsive Web Applications",
      "Single Page Applications",
      "Progressive Web Apps",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Full Stack Development",
    description:
      "End-to-end application development with modern technologies like the MERN stack",
    icon: Code2,
    features: [
      "REST API Development",
      "Database Design",
      "Server Architecture",
    ],
    technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Mobile Development",
    description:
      "Creating cross-platform mobile applications using React Native",
    icon: Smartphone,
    features: [
      "iOS & Android Apps",
      "Native Performance",
      "Push Notifications",
    ],
    technologies: ["React Native", "Expo", "Firebase", "App Store"],
  },
  {
    title: "Web3 Development",
    description:
      "Building decentralized applications and smart contracts for the blockchain",
    icon: Globe,
    features: ["Smart Contracts", "DeFi Applications", "NFT Platforms"],
    technologies: ["Solidity", "Web3.js", "Ethers.js", "IPFS"],
  },
  {
    title: "UI/UX Implementation",
    description:
      "Designing intuitive and beautiful user interfaces with a focus on user experience",
    icon: Blocks,
    features: ["Responsive Layouts", "Animation Design", "Design Systems"],
    technologies: ["Figma", "Framer Motion", "GSAP", "ThreeJS"],
  },
  {
    title: "Consultation",
    description:
      "Technical consultation and architecture planning for web applications",
    icon: Lightbulb,
    features: [
      "Architecture Review",
      "Performance Optimization",
      "Technical Strategy",
    ],
    technologies: ["System Design", "Cloud Architecture", "DevOps", "CI/CD"],
  },
];

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="services"
      className="container relative px-4 py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            Services
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Comprehensive solutions for your web development needs
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() =>
                  //@ts-expect-error
                  setHoveredIndex(index)
                }
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative perspective-1000"
              >
                <motion.div
                  className="relative h-full rounded-xl bg-card p-6 shadow-lg transition-all duration-300"
                  animate={{
                    rotateX: hoveredIndex === index ? 5 : 0,
                    rotateY: hoveredIndex === index ? 5 : 0,
                    scale: hoveredIndex === index ? 1.02 : 1,
                  }}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Icon */}
                  <div className="mb-6 inline-flex rounded-xl bg-primary/10 p-3 text-primary ring-1 ring-primary/20">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-2 text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="mb-6 text-sm text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary ring-1 ring-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Hover button */}
                  <div className="absolute bottom-6 right-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center rounded-full bg-primary p-2 text-primary-foreground"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-xl text-muted-foreground">
            Need a custom solution? <br className="sm:hidden" />
            Let&apos;s discuss your project requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection;
