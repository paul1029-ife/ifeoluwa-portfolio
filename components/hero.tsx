"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

export function HeroSection() {
  return (
    <section className="container relative flex min-h-screen items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
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
            className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-8xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-block bg-gradient-to-r from-primary to-primary/70 bg-clip-text pb-3 text-transparent">
              Ifeoluwa Agbogun
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A Frontend Developer based in Nigeria, I specialize in crafting
            user-friendly and scalable web applications using React, Next.js,
            and TypeScript.
          </motion.p>

          <motion.div
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/#projects">
              <Button
                size="lg"
                className="min-w-[160px] transition-all hover:scale-105 hover:shadow-lg"
              >
                View Portfolio
              </Button>
            </Link>
            <Link href="/#contact">
              <Button
                size="lg"
                variant="outline"
                className="min-w-[160px] transition-all hover:scale-105 hover:shadow-lg"
              >
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
            <Link
              href="https://github.com/paul1029-ife"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <GithubIcon className="h-6 w-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/paul-agbogun01/"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <LinkedinIcon className="h-6 w-6" />
            </Link>
            <Link
              href="https://x.com/theactual001"
              aria-label="Twitter"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <TwitterIcon className="h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
