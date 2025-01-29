"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";

interface FloatingShapeProps {
  className: string;
}

const FloatingShape = ({ className }: FloatingShapeProps) => (
  <motion.div
    className={`absolute rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-2xl ${className}`}
    animate={{
      y: [0, -20, 0],
      x: [0, 10, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    }}
  />
);

const GridPattern = () => (
  <div className="absolute -z-20 inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />
);

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <GridPattern />
      <FloatingShape className="h-96 w-96 -z-20 left-1/4 top-1/4 opacity-40" />
      <FloatingShape className="h-64 w-64 -z-20 right-1/4 bottom-1/4 opacity-30" />

      <div className="w-full max-w-4xl px-4 py-8">
        <div className="flex flex-col items-center justify-center text-center">
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
            transition={{ duration: 0.5 }}
          >
            <Link href="/#projects" passHref>
              <Button
                size="lg"
                className="w-full transition-all hover:scale-105 hover:shadow-lg"
                aria-label="View Portfolio"
              >
                View Portfolio
              </Button>
            </Link>
            <Link href="/#contact" passHref>
              <Button
                size="lg"
                variant="outline"
                className="w-full transition-all hover:scale-105 hover:shadow-lg"
                aria-label="Contact Me"
              >
                Contact Me
              </Button>
            </Link>
          </motion.div>

          <SocialIcons />
        </div>
      </div>
    </section>
  );
}

interface SocialIconProps {
  href: string;
  ariaLabel: string;
  icon: React.ReactNode;
}

const SocialIcon = ({ href, ariaLabel, icon }: SocialIconProps) => {
  const iconAnimation = {
    rest: {
      scale: 1,
      rotate: 0,
    },
    hover: {
      scale: 1.1,
      rotate: [0, -10, 10, 0],
      transition: {
        rotate: {
          duration: 0.4,
          ease: "easeInOut",
        },
        scale: {
          duration: 0.2,
          ease: "easeInOut",
        },
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <motion.div initial="rest" whileHover="hover" whileTap="tap" animate="rest">
      <Link
        href={href}
        aria-label={ariaLabel}
        className="block text-muted-foreground hover:text-primary transition-colors"
        rel="noopener noreferrer"
      >
        <motion.div variants={iconAnimation}>{icon}</motion.div>
      </Link>
    </motion.div>
  );
};

const SocialIcons = () => {
  return (
    <motion.div
      className="mt-16 flex items-center justify-center gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <SocialIcon
        href="https://github.com/paul1029-ife"
        ariaLabel="GitHub"
        icon={<GithubIcon className="h-6 w-6" />}
      />
      <SocialIcon
        href="https://linkedin.com/in/paul-agbogun01/"
        ariaLabel="LinkedIn"
        icon={<LinkedinIcon className="h-6 w-6" />}
      />
      <SocialIcon
        href="mailto:paul.agbogun@gmail.com"
        ariaLabel="Email"
        icon={<Mail className="h-6 w-6" />}
      />
    </motion.div>
  );
};

export default HeroSection;
