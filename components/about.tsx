"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { Download } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="flex min-h-screen w-full items-center justify-center py-24"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-xl lg:max-w-none"
            >
              <Image
                src="/about.jpg"
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

            <div className="flex flex-col justify-center space-y-8">
              <Reveal>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  About Me
                </h2>
              </Reveal>

              <div className="space-y-4">
                <Reveal>
                  <p className="text-lg text-muted-foreground">
                    I&apos;m a Frontend Developer and Computer Science student
                    with 4 years of experience in web development.
                  </p>
                </Reveal>

                <Reveal>
                  <p className="text-lg text-muted-foreground">
                    Currently developing enterprise-level applications using
                    React, Next.js, and TypeScript. Strong focus on UI/UX
                    implementation, component architecture, and performance
                    optimization.
                  </p>
                </Reveal>
              </div>

              <Reveal>
                <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
                  {[
                    { value: "3+", label: "Years of Experience" },
                    { value: "10+", label: "Projects Completed" },
                    { value: "2+", label: "Happy Clients" },
                    { value: "10+", label: "Technologies" },
                  ].map((stat, index) => (
                    <div key={index} className="flex flex-col space-y-2">
                      <h3 className="text-3xl font-bold">{stat.value}</h3>
                      <p className="text-sm text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal>
                <Button
                  className="inline-flex items-center gap-2"
                  onClick={() => window.open("/resume-paul.pdf")}
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
