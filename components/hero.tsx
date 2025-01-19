"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";

export function HeroSection() {
  return (
    <section className="container relative min-h-screen">
      <div className="absolute inset-0 flex items-center justify-center">
        <Spotlight />
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.span
            className="mb-4 block text-lg font-medium text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello, I&apos;m
          </motion.span>

          <motion.h1
            className="mb-6 text-5xl font-bold tracking-tight sm:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="mt-2 block bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
              Ifeoluwa Agbogun
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A Frontend Developer specializing in React, Next.js, and TypeScript.
            Building modern web experiences with a focus on performance and user
            experience.
          </motion.p>

          <motion.div
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/#projects">
              <Button size="lg" className="min-w-[160px]">
                View Portfolio
              </Button>
            </Link>
            <Link href="/#contact">
              <Button size="lg" variant="outline" className="min-w-[160px]">
                Contact Me
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="mt-16 flex items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Social Links - Add your preferred social media links */}
            <Link
              href="https://github.com/paul1029-ife"
              className="text-muted-foreground hover:text-primary"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/paul-agbogun01/"
              className="text-muted-foreground hover:text-primary"
            >
              LinkedIn
            </Link>
            <Link
              href="https://x.com/theactual001"
              className="text-muted-foreground hover:text-primary"
            >
              X
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
