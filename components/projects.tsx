"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ProjectTag =
  | "Next.js"
  | "TypeScript"
  | "Web3"
  | "React"
  | "Node.js"
  | "MongoDB"
  | "AI";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: ProjectTag[];
  id: "aje" | "nibo" | "beyou";
}

const projects: Project[] = [
  {
    id: "aje",
    title: "Aje",
    description:
      "An online marketplace for buying and selling products with crypto wallet integration.",
    image: "/ajelogo.png",
    link: "/aje",
    tags: ["Next.js", "TypeScript", "Web3"],
  },
  {
    id: "nibo",
    title: "nibo",
    description:
      "A platform for wholesalers to manage products efficiently with real-time data for store locations.",
    image: "/Nibo.svg",
    link: "/nibo",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: "beyou",
    title: "BeYou",
    description:
      "A goal-based learning platform with personalized paths and progress tracking.",
    image: "/image.png",
    link: "/be-you",
    tags: ["Next.js", "TypeScript", "AI"],
  },
] as const;

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => (
  <motion.div
    className="group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}
  >
    <Link href={project.link} aria-label={`View project ${project.title}`}>
      <Card className="relative overflow-hidden border-0 bg-background/50 backdrop-blur-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02]">
        {/* Gradient Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={`Thumbnail for ${project.title}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {/* Image Overlay */}
          <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
        </div>
        <CardHeader className="p-6">
          <CardTitle className="flex items-center justify-between text-xl font-bold">
            {project.title}
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-primary"
            >
              <ArrowUpRight className="h-5 w-5" />
            </motion.div>
          </CardTitle>
          <CardDescription className="mt-2 text-sm text-muted-foreground">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <motion.span
                key={tag}
                className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  </motion.div>
);

export function ProjectsSection() {
  return (
    <section id="projects" className="container mx-auto px-4 py-20">
      <div className="text-center">
        <motion.h2
          className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Some of my featured works
        </motion.p>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
