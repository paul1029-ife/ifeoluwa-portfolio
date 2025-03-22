"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/paul1029-ife",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/paul-agbogun01",
    icon: Linkedin,
  },
  {
    name: "X",
    url: "https://x.com/theactual001",
    icon: "x",
  },
  {
    name: "Email",
    url: "mailto:paul.agbogun@gmail.com",
    icon: Mail,
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="flex min-h-screen w-full items-center justify-center py-24"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Let&apos;s Connect
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Whether you have a project in mind or just want to say hi,
              I&apos;d love to hear from you!
            </p>
          </motion.div>

          <div className="mt-16 grid gap-12 md:grid-cols-2 lg:gap-16">
            {/* Social Links Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center md:items-start"
            >
              <div className="w-full text-center md:text-left">
                <h3 className="text-2xl font-semibold">Find Me Online</h3>
                <p className="mt-2 text-muted-foreground">
                  Let&apos;s collaborate or chat—reach out through any of these
                  platforms.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-4 md:justify-start">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-3 text-primary transition-all hover:bg-primary/20 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`Visit my ${link.name} profile`}
                    >
                      {link.icon === "x" ? (
                        <Image
                          src="/x.svg"
                          alt="X Logo"
                          width={20}
                          height={20}
                          className="h-5 w-5 dark:invert"
                        />
                      ) : (
                        <link.icon className="h-5 w-5" />
                      )}
                      <span className="text-sm font-medium">{link.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Location Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-8 md:items-start"
            >
              <div className="w-full text-center md:text-left">
                <h3 className="text-2xl font-semibold">Based In</h3>
                <p className="mt-2 text-muted-foreground">
                  Lagos State, NG-LA
                  <br />
                  Nigeria
                </p>
              </div>
              <div className="w-full text-center md:text-left">
                <h3 className="text-2xl font-semibold">Email Me</h3>
                <motion.a
                  href="mailto:paul.agbogun@gmail.com"
                  className="mt-2 inline-block text-primary underline underline-offset-4 hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Send me an email"
                >
                  paul.agbogun@gmail.com
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
