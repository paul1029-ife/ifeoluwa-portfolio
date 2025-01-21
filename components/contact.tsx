"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, X } from "lucide-react";

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
    name: "x",
    url: "https://x.com/theactual001",
    icon: X,
  },
  {
    name: "Email",
    url: "mailto:paul.agbogun@gmail.com",
    icon: Mail,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="container px-4">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-muted-foreground">
            Let&apos;s work together on your next project
          </p>
        </div>
        <div className="mt-16 grid gap-32 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form className="space-y-4">
              <div>
                <Input placeholder="Name" />
              </div>
              <div>
                <Input type="email" placeholder="Email" />
              </div>
              <div>
                <Input placeholder="Subject" />
              </div>
              <div>
                <Textarea placeholder="Message" rows={6} />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-lg font-semibold">Connect with me</h3>
              <div className="mt-4 flex gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-primary/10 p-2 text-primary transition-colors hover:bg-primary/20"
                    >
                      <Icon className="h-5 w-5" />
                      <span className="sr-only">{link.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Location</h3>
              <p className="mt-2 text-muted-foreground">
                Lagos State, LA
                <br />
                Nigeria
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
