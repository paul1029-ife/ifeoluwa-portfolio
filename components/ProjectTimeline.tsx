/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Globe,
  CheckCircle2,
  Clock,
  Rocket,
  Target,
  Users,
  ShoppingCart,
  Store,
  Brain,
  Wallet,
  Building2,
  Map,
  Sparkles,
  GraduationCap,
  BarChart,
  Award,
  ExternalLink,
} from "lucide-react";
import { ProjectId, ProjectsDataType, Phase } from "@/types/types";
import { cn } from "@/lib/utils";

const projectsData: ProjectsDataType = {
  aje: {
    title: "Aje Marketplace",
    description:
      "A decentralized marketplace revolutionizing online commerce with crypto integration",
    duration: "6 months",
    team: "4 developers",
    theme: "from-violet-500 to-violet-300",
    accentColor: "violet",
    liveUrl: "https://aje.africa",
    phases: [
      {
        title: "Discovery & Planning",
        icon: Target,
        date: "Month 1",
        services: ["Consultation"],
        description: "Architecting a secure and scalable crypto marketplace",
        achievements: [
          "Blockchain platform selection",
          "Smart contract architecture design",
          "User flow optimization",
        ],
      },
      {
        title: "Web3 Foundation",
        icon: Wallet,
        date: "Month 2",
        services: ["Web3 Development"],
        description: "Building the core blockchain infrastructure",
        achievements: [
          "Smart contract development",
          "Wallet integration system",
          "Transaction handling setup",
        ],
      },
      {
        title: "Marketplace Development",
        icon: ShoppingCart,
        date: "Month 3-4",
        services: ["Frontend Development", "Full Stack Development"],
        description: "Creating the marketplace interface and functionality",
        achievements: [
          "Product listing system",
          "Search and filter implementation",
          "Payment integration",
        ],
      },
      {
        title: "Security & Testing",
        icon: Globe,
        date: "Month 5",
        services: ["Web3 Development", "Full Stack Development"],
        description: "Ensuring platform security and reliability",
        achievements: [
          "Smart contract auditing",
          "Penetration testing",
          "Performance optimization",
        ],
      },
      {
        title: "Launch & Scaling",
        icon: Rocket,
        date: "Month 6",
        services: ["Mobile Development", "Consultation"],
        description: "Platform launch and mobile optimization",
        achievements: [
          "Mobile responsive implementation",
          "Analytics integration",
          "Marketing site launch",
        ],
      },
    ],
  },
  nibo: {
    title: "Nibo",
    description:
      "Revolutionizing wholesale management with real-time store tracking",
    duration: "4 months",
    team: "3 developers",
    theme: "from-emerald-500 to-emerald-300",
    accentColor: "emerald",
    phases: [
      {
        title: "Requirements Analysis",
        icon: Target,
        date: "Month 1",
        services: ["Consultation"],
        description: "Understanding wholesale operations and requirements",
        achievements: [
          "Stakeholder interviews",
          "Workflow analysis",
          "Technical requirements documentation",
        ],
      },
      {
        title: "Location System Design",
        icon: Map,
        date: "Month 1-2",
        services: ["Full Stack Development"],
        description: "Building the real-time location tracking system",
        achievements: [
          "Geolocation integration",
          "Real-time updates system",
          "Store mapping interface",
        ],
      },
      {
        title: "Inventory Management",
        icon: Store,
        date: "Month 2-3",
        services: ["Frontend Development", "Full Stack Development"],
        description: "Developing the core inventory system",
        achievements: [
          "Stock management system",
          "Order tracking",
          "Supplier integration",
        ],
      },
      {
        title: "Analytics Dashboard",
        icon: BarChart,
        date: "Month 3",
        services: ["UI/UX Implementation"],
        description: "Creating insightful data visualizations",
        achievements: [
          "Performance metrics",
          "Sales analytics",
          "Location insights",
        ],
      },
      {
        title: "Deployment & Training",
        icon: Building2,
        date: "Month 4",
        services: ["Consultation", "Mobile Development"],
        description: "System deployment and user training",
        achievements: [
          "User onboarding system",
          "Documentation creation",
          "Mobile app deployment",
        ],
      },
    ],
    liveUrl: "nibo.ng",
  },
  beyou: {
    title: "BeYou",
    description: "AI-powered personalized learning paths for self-improvement",
    duration: "5 months",
    team: "3 developers",
    theme: "from-blue-500 to-blue-300",
    accentColor: "blue",
    phases: [
      {
        title: "AI Strategy Planning",
        icon: Brain,
        date: "Month 1",
        services: ["Consultation"],
        description: "Designing the AI-driven learning system",
        achievements: [
          "Learning algorithm design",
          "Data structure planning",
          "API integration strategy",
        ],
      },
      {
        title: "Learning Path Engine",
        icon: GraduationCap,
        date: "Month 2",
        services: ["Full Stack Development"],
        description: "Building the core learning path generator",
        achievements: [
          "Path generation algorithm",
          "Progress tracking system",
          "Recommendation engine",
        ],
      },
      {
        title: "Interactive Interface",
        icon: Sparkles,
        date: "Month 3",
        services: ["Frontend Development", "UI/UX Implementation"],
        description: "Creating an engaging user interface",
        achievements: [
          "Interactive lessons",
          "Progress visualization",
          "Achievement system",
        ],
      },
      {
        title: "AI Integration",
        icon: Brain,
        date: "Month 4",
        services: ["Full Stack Development"],
        description: "Implementing AI features and optimization",
        achievements: [
          "Personalization engine",
          "Learning analytics",
          "Adaptive content delivery",
        ],
      },
      {
        title: "Platform Launch",
        icon: Award,
        date: "Month 5",
        services: ["Mobile Development", "Consultation"],
        description: "Final testing and platform launch",
        achievements: [
          "Mobile optimization",
          "Performance testing",
          "User feedback integration",
        ],
      },
    ],
    liveUrl: "https://be-you-six.vercel.app",
  },
} as const;
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

const scaleAnimation = {
  initial: { scale: 1 },
  animate: { scale: [1, 1.5, 1] },
};

interface TimelineNodeProps {
  accentColor: string;
  delay: number;
}

const TimelineNode = ({ accentColor, delay }: TimelineNodeProps) => (
  <motion.div
    className={cn(
      "absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full",
      `bg-${accentColor}-500`
    )}
    variants={scaleAnimation}
    whileInView="animate"
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  />
);

interface PhaseCardProps {
  phase: Phase;
  isEven: boolean;
  index: number;
  accentColor: string;
}

const PhaseCard = ({ phase, isEven, index, accentColor }: PhaseCardProps) => {
  const Icon = phase.icon;

  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative mb-8 md:mb-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pl-8 md:pl-0">
        <div
          className={cn(
            isEven ? "md:text-right md:col-span-1" : "md:col-start-2"
          )}
        >
          <Card className="relative group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Icon className={cn(`text-${accentColor}-500`, "h-5 w-5")} />
                <span className="text-sm font-medium text-muted-foreground">
                  {phase.date}
                </span>
              </div>
              <CardTitle className="text-lg md:text-xl mb-2">
                {phase.title}
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                {phase.description}
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {phase.services.map((service) => (
                    <span
                      key={service}
                      className={cn(
                        "rounded-full px-3 py-1 text-xs font-medium",
                        `bg-${accentColor}-100`,
                        `text-${accentColor}-700`
                      )}
                    >
                      {service}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2">
                  {phase.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex items-center text-sm gap-2"
                    >
                      <CheckCircle2
                        className={cn(
                          `text-${accentColor}-500`,
                          "h-4 w-4 flex-shrink-0"
                        )}
                      />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <TimelineNode accentColor={accentColor} delay={index * 0.2} />
    </motion.div>
  );
};

interface ProjectTimelineProps {
  projectId: ProjectId;
}

const ProjectTimeline = ({ projectId }: ProjectTimelineProps) => {
  const project = projectsData[projectId];
  if (!project) return null;

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center mb-8 md:mb-16"
      >
        <h1
          className={cn(
            "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-clip-text text-transparent mb-4",
            `bg-gradient-to-r ${project.theme}`
          )}
        >
          {project.title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-6">
          {project.description}
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-4">
          <div className="flex items-center justify-center gap-2">
            <Clock
              className={cn(`text-${project.accentColor}-500`, "h-5 w-5")}
            />
            <span>{project.duration}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Users
              className={cn(`text-${project.accentColor}-500`, "h-5 w-5")}
            />
            <span>{project.team}</span>
          </div>
        </div>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-md transition-colors",
              `bg-${project.accentColor}-500 hover:bg-${project.accentColor}-600`,
              "text-white font-medium"
            )}
          >
            View Live Site
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </motion.div>

      <div className="relative">
        <div
          className={cn(
            "absolute left-4 md:left-1/2 h-full w-px",
            `bg-${project.accentColor}-200`,
            "md:-translate-x-1/2"
          )}
        />

        {project.phases.map((phase, index) => (
          <PhaseCard
            key={phase.title}
            phase={phase}
            isEven={index % 2 === 0}
            index={index}
            accentColor={project.accentColor}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectTimeline;
