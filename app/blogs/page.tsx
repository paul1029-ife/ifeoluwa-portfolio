//@ts-nocheck
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/api";

export const revalidate = 60;
export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="pt-16 md:pt-24">
      <h1 className="text-3xl font-bold mb-8">My Blog Posts</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            href={`/blogs/${post.fields.slug}`}
            key={post.sys.id}
            className="block border rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{post.fields.title}</h2>
            <p className="text-gray-600 mb-4">
              {new Date(post.sys.createdAt).toLocaleDateString()}
            </p>
            <p className="text-gray-700">{post.fields.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
