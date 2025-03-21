import ProjectTimeline from "@/components/ProjectTimeline";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Define valid project IDs
const validProjects = {
  tbc: "tbc",
  sparkedge: "sparkedge",
  "be-you": "beyou",
} as const;

type ProjectId = keyof typeof validProjects;

// Define params type for Next.js 15
type Props = {
  params: Promise<{ id: string }>;
};

// Generate static params for all valid projects [^1]
export async function generateStaticParams() {
  return Object.keys(validProjects).map((id) => ({
    id,
  }));
}

// Generate metadata for each project page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const projectId = validProjects[id as ProjectId];

  if (!projectId) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `Project ${projectId.toUpperCase()}`,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const projectId = validProjects[id as ProjectId];

  if (!projectId) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <ProjectTimeline projectId={projectId} />
    </main>
  );
}
