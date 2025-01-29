"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { Download } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="container px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative aspect-square overflow-hidden rounded-xl"
          >
            <Image
              src="/person.jpg"
              alt="Profile"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0" />
            <motion.div
              className="absolute inset-0 bg-primary/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.div>
          <div className="flex flex-col justify-center">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                About Me
              </h2>
            </Reveal>
            <Reveal>
              <p className="mt-4 text-lg text-muted-foreground">
                I&apos;m a 17-year-old Frontend Developer and Computer Science
                student with 4 years of experience in web development.
              </p>
            </Reveal>
            <Reveal>
              <p className="mt-4 text-lg text-muted-foreground">
                Currently developing enterprise-level applications using React,
                Next.js, and TypeScript. Strong focus on UI/UX implementation,
                component architecture, and performance optimization.
              </p>
            </Reveal>
            <Reveal>
              <div className="mt-8 space-y-4">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold">3+</h3>
                    <p className="text-sm text-muted-foreground">
                      Years of Experience
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold">10+</h3>
                    <p className="text-sm text-muted-foreground">
                      Projects Completed
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold">2+</h3>
                    <p className="text-sm text-muted-foreground">
                      Happy Clients
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold">10+</h3>
                    <p className="text-sm text-muted-foreground">
                      Technologies
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="mt-8">
                <Button
                  className="gap-2"
                  onClick={() => window.open("/resume-paul.pdf")}
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
