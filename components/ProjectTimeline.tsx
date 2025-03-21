"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import {
  Target,
  Layout,
  LayoutDashboard,
  Database,
  Rocket,
  Users,
  DollarSign,
  Briefcase,
  BarChart,
  Zap,
  GraduationCap,
  Sparkles,
  Smartphone,
} from "lucide-react";

// Type definitions
type Phase = {
  title: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  date: string;
  services: string[];
  description: string;
  achievements: string[];
};

export type Project = {
  title: string;
  description: string;
  duration: string;
  team: string;
  theme: string;
  accentColor: string;
  liveUrl?: string;
  phases: Phase[];
};

type ProjectsDataType = {
  [key: string]: Project;
};

// Project data (from your paste-2.txt)
const projectsData: ProjectsDataType = {
  tbc: {
    title: "Scoolr",
    description:
      "A modern school management dashboard with student performance tracking and administrative tools",
    duration: "3 months",
    team: "Solo project",
    theme: "from-violet-500 to-violet-300",
    accentColor: "violet",
    liveUrl: "https://scoolr.vercel.app",
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
  sparkedge: {
    title: "SparkEdge",
    description:
      "A dynamic platform for startups to collaborate, fundraise, and access top tech talent",
    duration: "4 months",
    team: "Solo project",
    theme: "from-indigo-500 to-indigo-300",
    accentColor: "indigo",
    phases: [
      {
        title: "Collaboration Hub",
        icon: Users,
        date: "Month 1",
        services: ["Frontend Development"],
        description: "Building a space for seamless startup collaboration",
        achievements: [
          "Real-time communication setup",
          "Task and milestone tracking",
          "Role-based access control",
        ],
      },
      {
        title: "Fundraising System",
        icon: DollarSign,
        date: "Month 1-2",
        services: ["Frontend Development"],
        description: "Developing a transparent funding mechanism",
        achievements: [
          "Crowdfunding feature implementation",
          "Contribution tracking",
          "Secure wallet integration",
        ],
      },
      {
        title: "Talent Marketplace",
        icon: Briefcase,
        date: "Month 2-3",
        services: ["Frontend Development"],
        description: "Connecting startups with skilled tech professionals",
        achievements: [
          "Job posting and application system",
          "Skill-based matchmaking",
          "Freelance task bidding feature",
        ],
      },
      {
        title: "Progress Analytics",
        icon: BarChart,
        date: "Month 3",
        services: ["Frontend Development"],
        description: "Providing insights into startup growth",
        achievements: [
          "Custom analytics dashboard",
          "Engagement and funding metrics",
          "Interactive reports",
        ],
      },
      {
        title: "Performance Optimization",
        icon: Zap,
        date: "Month 4",
        services: ["Frontend Development"],
        description: "Enhancing speed and efficiency",
        achievements: [
          "Lazy loading for improved performance",
          "Code splitting and bundle optimization",
          "Database query optimizations",
        ],
      },
    ],
    liveUrl: "https://starthub-lime.vercel.app",
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
};

const PhaseContent = ({ phase }: { phase: Phase }) => {
  const Icon = phase.icon;

  return (
    <div>
      <div className="flex items-start gap-3 mb-3">
        <div className="bg-neutral-100 dark:bg-neutral-800 p-2 rounded-md">
          <Icon className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
        </div>
        <div>
          <h3 className="text-base font-medium text-neutral-900 dark:text-neutral-100">
            {phase.title}
          </h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {phase.date}
          </p>
        </div>
      </div>

      <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
        {phase.description}
      </p>

      <div className="mb-8">
        {phase.achievements.map((achievement, i) => (
          <div
            key={i}
            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm"
          >
            ✅ {achievement}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Image
          src="/sparkedge/sparkedge1.png"
          alt="Phase screenshot 1"
          width={400}
          height={320}
          className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        />
        <Image
          src="/beyou/beyou1.png"
          alt="Phase screenshot 2"
          width={400}
          height={320}
          className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        />
      </div>
    </div>
  );
};

export default function ProjectTimeline({ projectId }: { projectId: string }) {
  const project = projectsData[projectId];

  if (!project) {
    return <div className="text-red-500">Project not found</div>;
  }

  const timelineData = project.phases.map((phase) => {
    return {
      title: phase.date,
      content: <PhaseContent phase={phase} />,
    };
  });

  return <Timeline project={project} data={timelineData} />;
}
