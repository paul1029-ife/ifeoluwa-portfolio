import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Project Not Found</h1>
      <p className="text-muted-foreground">
        Could not find the requested project.
      </p>
      <Link
        href="/projects"
        className="mt-4 rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
      >
        Back to Projects
      </Link>
    </main>
  );
}
