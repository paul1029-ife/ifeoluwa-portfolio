import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, Node } from "@contentful/rich-text-types";

export const revalidate = 60; // Revalidate every 60 seconds

interface BlogPostPageParams {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();

  return posts.map((post) => ({
    slug: post.fields.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageParams) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node: Node, children: React.ReactNode) => (
        <h1 className="text-3xl font-bold my-4">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node: Node, children: React.ReactNode) => (
        <h2 className="text-2xl font-bold my-3">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node: Node, children: React.ReactNode) => (
        <h3 className="text-xl font-bold my-2">{children}</h3>
      ),
      [BLOCKS.PARAGRAPH]: (node: Node, children: React.ReactNode) => (
        <p className="my-4">{children}</p>
      ),
      [BLOCKS.UL_LIST]: (node: Node, children: React.ReactNode) => (
        <ul className="list-disc pl-6 my-4">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node: Node, children: React.ReactNode) => (
        <ol className="list-decimal pl-6 my-4">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node: Node, children: React.ReactNode) => (
        <li className="mb-1">{children}</li>
      ),
      [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
        <a
          href={node.data.uri}
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
    },
  };

  return (
    <div className="max-w-3xl mx-auto pt-24">
      <Link href="/blog" className="text-blue-600 hover:underline mb-4 block">
        ← Back to all posts
      </Link>

      <h1 className="text-4xl font-bold mb-4">{post.fields.title}</h1>

      <p className="text-gray-600 mb-8">
        Published on {new Date(post.sys.createdAt).toLocaleDateString()}
      </p>

      {post.fields.featuredImage && (
        <div className="mb-8">
          <Image
            src={`https:${post.fields.featuredImage.fields.file.url}`}
            alt={post.fields.featuredImage.fields.title || post.fields.title}
            width={post.fields.featuredImage.fields.file.details.image.width}
            height={post.fields.featuredImage.fields.file.details.image.height}
            className="w-full h-auto rounded-lg"
          />
        </div>
      )}

      <div className="prose max-w-none">
        {documentToReactComponents(post.fields.content, options)}
      </div>
    </div>
  );
}
