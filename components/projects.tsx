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

const projects = [
  {
    title: "Aje",
    description:
      "An online marketplace for buying and selling products with crypto wallet integration.",
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
    tags: ["Next.js", "TypeScript", "Web3"],
  },
  {
    title: "nibo",
    description:
      "A platform for wholesalers to manage products and stores efficiently with real time data for stores locations.",
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "BeYou",
    description:
      "A goal-based learning platform with personalized paths and progress tracking.",
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
    tags: ["Next.js", "TypeScript", "AI"],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="container mx-auto px-4 py-12">
      <div className="text-center">
        <motion.h2
          className="text-3xl font-extrabold tracking-tight sm:text-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <motion.p
          className="mt-4 text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Some of my featured works
        </motion.p>
      </div>

      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              href={project.link}
              aria-label={`View project ${project.title}`}
            >
              <Card className="overflow-hidden border hover:shadow-2xl transition-transform duration-300 group-hover:scale-105">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`Thumbnail for ${project.title}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="flex items-center justify-between text-lg font-semibold">
                    {project.title}
                    <ArrowUpRight className="h-5 w-5 text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </CardTitle>
                  <CardDescription className="mt-2 text-sm text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
