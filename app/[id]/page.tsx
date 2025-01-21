import ProjectTimeline from "@/components/ProjectTimeline";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const projectId =
    params.id === "aje"
      ? "aje"
      : params.id === "nibo"
      ? "nibo"
      : params.id === "be-you"
      ? "beyou"
      : null;

  if (!projectId) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <ProjectTimeline projectId={projectId} />
    </main>
  );
}
