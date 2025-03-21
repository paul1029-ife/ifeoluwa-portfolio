/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";

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
      [BLOCKS.HEADING_1]: (node: any, children: React.ReactNode) => (
        <h1 className="text-3xl font-bold my-4">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => (
        <h2 className="text-2xl font-bold my-3">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => (
        <h3 className="text-xl font-bold my-2">{children}</h3>
      ),
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => {
        // Check if this paragraph contains a code block (a child with a code mark)
        const containsCodeBlock = node.content?.some((item: any) =>
          item.marks?.some((mark: any) => mark.type === "code")
        );

        if (containsCodeBlock && node.content?.length === 1) {
          const codeContent = node.content[0].value;
          return (
            <div className="my-6 overflow-x-auto">
              <pre className="bg-gray-900 rounded-lg p-4 text-white">
                <code>{codeContent}</code>
              </pre>
            </div>
          );
        }

        return <p className="my-4">{children}</p>;
      },
      [BLOCKS.QUOTE]: (node: any, children: React.ReactNode) => (
        <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
          {children}
        </blockquote>
      ),
      [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => (
        <ul className="list-disc pl-6 my-4">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => (
        <ol className="list-decimal pl-6 my-4">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => (
        <li className="mb-1">{children}</li>
      ),
      [BLOCKS.HR]: () => <hr className="my-8 border-t border-gray-300" />,
      [BLOCKS.TABLE]: (node: any, children: React.ReactNode) => (
        <div className="my-6 overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            {children}
          </table>
        </div>
      ),
      [BLOCKS.TABLE_ROW]: (node: any, children: React.ReactNode) => (
        <tr className="border-b border-gray-300">{children}</tr>
      ),
      [BLOCKS.TABLE_CELL]: (node: any, children: React.ReactNode) => (
        <td className="px-4 py-2 border border-gray-300">{children}</td>
      ),
      [BLOCKS.TABLE_HEADER_CELL]: (node: any, children: React.ReactNode) => (
        <th className="px-4 py-2 bg-gray-100 font-bold border border-gray-300">
          {children}
        </th>
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
      [INLINES.EMBEDDED_ENTRY]: (node: any) => {
        const target = node.data?.target;
        if (!target) return null;
        return (
          <div className="my-4 p-4 border border-gray-300 rounded-lg">
            <p className="text-gray-600">Embedded Entry: {target.sys.id}</p>
          </div>
        );
      },
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const file = node.data?.target?.fields?.file;
        if (!file) return null;

        const { url, fileName, details } = file;
        const { width, height } = details?.image || { width: 800, height: 600 };

        return (
          <div className="my-6">
            <Image
              src={`https:${url}`}
              alt={fileName}
              width={width}
              height={height}
              className="w-full h-auto rounded-lg"
            />
          </div>
        );
      },
    },
    renderMark: {
      [MARKS.BOLD]: (text: React.ReactNode) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text: React.ReactNode) => <em>{text}</em>,
      [MARKS.UNDERLINE]: (text: React.ReactNode) => <u>{text}</u>,
      [MARKS.CODE]: (text: React.ReactNode) => {
        // Determine if this is a multi-line code block or an inline code snippet
        if (typeof text === "string" && text.includes("\n")) {
          return (
            <pre className="bg-gray-900 rounded-lg p-4 text-gray-100 font-mono overflow-x-auto">
              <code>{text}</code>
            </pre>
          );
        }
        return (
          <code className="bg-gray-400 px-1 py-0.5 rounded text-sm font-mono">
            {text}
          </code>
        );
      },
    },
  };

  return (
    <div className="max-w-3xl mx-auto pt-24">
      <Link href="/blogs" className="text-blue-600 hover:underline mb-4 block">
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
