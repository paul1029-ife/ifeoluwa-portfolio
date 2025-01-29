"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle2,
  Clock,
  Rocket,
  Target,
  Users,
  Store,
  Map,
  Sparkles,
  GraduationCap,
  BarChart,
  ExternalLink,
  Smartphone,
  Layout,
  Zap,
  Database,
  LayoutDashboard,
} from "lucide-react";
import { ProjectId, ProjectsDataType, Phase } from "@/types/types";
import { cn } from "@/lib/utils";

const projectsData: ProjectsDataType = {
  tbc: {
    title: "TBC Dashboard",
    description:
      "A modern school management dashboard with student performance tracking and administrative tools",
    duration: "3 months",
    team: "Solo project",
    theme: "from-violet-500 to-violet-300",
    accentColor: "violet",
    liveUrl: "https://tbc-dashboard.vercel.app",
    phases: [
      {
        title: "UI/UX Design",
        icon: Target,
        date: "Month 1",
        services: ["Frontend Development"],
        description:
          "Designing an intuitive and accessible dashboard interface",
        achievements: [
          "Responsive layout design",
          "Component architecture planning",
          "User interface prototyping",
        ],
      },
      {
        title: "Core Components",
        icon: Layout,
        date: "Month 1-2",
        services: ["Frontend Development"],
        description: "Building reusable dashboard components",
        achievements: [
          "Custom chart components",
          "Data grid implementation",
          "Form component library",
        ],
      },
      {
        title: "Dashboard Features",
        icon: LayoutDashboard,
        date: "Month 2",
        services: ["Frontend Development"],
        description: "Implementing key dashboard functionality",
        achievements: [
          "Student performance tracking",
          "Attendance management system",
          "Grade visualization",
        ],
      },
      {
        title: "Data Integration",
        icon: Database,
        date: "Month 2-3",
        services: ["Frontend Development"],
        description: "Connecting frontend with backend services",
        achievements: [
          "API integration",
          "State management setup",
          "Real-time updates",
        ],
      },
      {
        title: "Optimization & Launch",
        icon: Rocket,
        date: "Month 3",
        services: ["Frontend Development"],
        description: "Performance optimization and deployment",
        achievements: [
          "Performance optimization",
          "Cross-browser testing",
          "Deployment configuration",
        ],
      },
    ],
  },
  nibo: {
    title: "Nibo",
    description:
      "A responsive wholesale management interface with real-time updates",
    duration: "4 months",
    team: "Frontend lead",
    theme: "from-emerald-500 to-emerald-300",
    accentColor: "emerald",
    phases: [
      {
        title: "Component Architecture",
        icon: Layout,
        date: "Month 1",
        services: ["Frontend Development"],
        description: "Designing the component system",
        achievements: [
          "Component library setup",
          "Design system implementation",
          "Responsive layout architecture",
        ],
      },
      {
        title: "Map Integration",
        icon: Map,
        date: "Month 1-2",
        services: ["Frontend Development"],
        description: "Implementing interactive maps",
        achievements: [
          "Map component development",
          "Location marker system",
          "Real-time location updates",
        ],
      },
      {
        title: "Store Interface",
        icon: Store,
        date: "Month 2-3",
        services: ["Frontend Development"],
        description: "Building the store management interface",
        achievements: [
          "Inventory display components",
          "Order management UI",
          "Filter and search functionality",
        ],
      },
      {
        title: "Data Visualization",
        icon: BarChart,
        date: "Month 3",
        services: ["Frontend Development"],
        description: "Creating interactive charts and graphs",
        achievements: [
          "Custom chart components",
          "Real-time data updates",
          "Interactive dashboards",
        ],
      },
      {
        title: "Performance Optimization",
        icon: Zap,
        date: "Month 4",
        services: ["Frontend Development"],
        description: "Optimizing application performance",
        achievements: [
          "Code splitting implementation",
          "Bundle size optimization",
          "Loading performance improvements",
        ],
      },
    ],
    liveUrl: "nibo.ng",
  },
  beyou: {
    title: "BeYou",
    description:
      "An interactive learning platform with personalized user experiences",
    duration: "5 months",
    team: "CEO, Lead Developer",
    theme: "from-blue-500 to-blue-300",
    accentColor: "blue",
    phases: [
      {
        title: "UI Architecture",
        icon: Layout,
        date: "Month 1",
        services: ["Frontend Development"],
        description: "Designing the application architecture",
        achievements: [
          "Component structure design",
          "Routing system setup",
          "State management planning",
        ],
      },
      {
        title: "Learning Interface",
        icon: GraduationCap,
        date: "Month 2",
        services: ["Frontend Development"],
        description: "Building the learning experience UI",
        achievements: [
          "Interactive lesson components",
          "Progress tracking interface",
          "Learning path visualization",
        ],
      },
      {
        title: "Interactive Features",
        icon: Sparkles,
        date: "Month 3",
        services: ["Frontend Development"],
        description: "Implementing user interactions",
        achievements: [
          "Drag-and-drop exercises",
          "Interactive quizzes",
          "Progress animations",
        ],
      },
      {
        title: "User Experience",
        icon: Users,
        date: "Month 4",
        services: ["Frontend Development"],
        description: "Enhancing user experience",
        achievements: [
          "Accessibility improvements",
          "Performance optimization",
          "Animation refinements",
        ],
      },
      {
        title: "Responsive Design",
        icon: Smartphone,
        date: "Month 5",
        services: ["Frontend Development"],
        description: "Mobile optimization",
        achievements: [
          "Mobile-first implementation",
          "Touch interaction support",
          "Cross-device testing",
        ],
      },
    ],
    liveUrl: "https://be-you-six.vercel.app",
  },
} as const;
const microHover = {
  scale: 1.02,
  transition: { duration: 0.2 },
};

const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: { duration: 0.3 },
};

interface TimelineNodeProps {
  accentColor: string;
}

const TimelineNode = ({ accentColor }: TimelineNodeProps) => (
  <motion.div
    whileHover={pulseAnimation}
    className={cn(
      "absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full",
      `bg-${accentColor}-500`
    )}
  />
);

interface PhaseCardProps {
  phase: Phase;
  isEven: boolean;
  accentColor: string;
}

const PhaseCard = ({ phase, isEven, accentColor }: PhaseCardProps) => {
  const Icon = phase.icon;

  return (
    <div className="relative mb-8 md:mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pl-8 md:pl-0">
        <div
          className={cn(
            isEven ? "md:text-right md:col-span-1" : "md:col-start-2"
          )}
        >
          <motion.div whileHover={microHover}>
            <Card className="relative">
              <CardHeader>
                <motion.div
                  className="flex items-center gap-2 mb-2"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className={cn(`text-${accentColor}-500`, "h-5 w-5")} />
                  <span className="text-sm font-medium text-muted-foreground">
                    {phase.date}
                  </span>
                </motion.div>
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
                      <motion.span
                        key={service}
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                        className={cn(
                          "rounded-full px-3 py-1 text-xs font-medium",
                          `bg-${accentColor}-100`,
                          `text-${accentColor}-700`
                        )}
                      >
                        {service}
                      </motion.span>
                    ))}
                  </div>
                  <ul className="space-y-2">
                    {phase.achievements.map((achievement) => (
                      <motion.li
                        key={achievement}
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center text-sm gap-2"
                      >
                        <CheckCircle2
                          className={cn(
                            `text-${accentColor}-500`,
                            "h-4 w-4 flex-shrink-0"
                          )}
                        />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      <TimelineNode accentColor={accentColor} />
    </div>
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
      <div className="text-center mb-8 md:mb-16">
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
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center gap-2"
          >
            <Clock
              className={cn(`text-${project.accentColor}-500`, "h-5 w-5")}
            />
            <span>{project.duration}</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center gap-2"
          >
            <Users
              className={cn(`text-${project.accentColor}-500`, "h-5 w-5")}
            />
            <span>{project.team}</span>
          </motion.div>
        </div>
        {project.liveUrl && (
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-md",
              "font-medium bg-accent"
            )}
          >
            View Live Site
            <ExternalLink className="h-4 w-4" />
          </motion.a>
        )}
      </div>

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
            accentColor={project.accentColor}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectTimeline;
