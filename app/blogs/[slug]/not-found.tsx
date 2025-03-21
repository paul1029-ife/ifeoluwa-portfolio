import Link from "next/link";

export default function BlogNotFound() {
  return (
    <div className="text-center py-16">
      <h2 className="text-3xl font-bold mb-4">Blog Post Not Found</h2>
      <p className="mb-6">
        Sorry, the blog post you're looking for doesn't exist.
      </p>
      <Link href="/blog" className="text-blue-600 hover:underline">
        Back to Blog
      </Link>
    </div>
  );
}
