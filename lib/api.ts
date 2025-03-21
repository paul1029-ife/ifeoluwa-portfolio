import { client } from "./contentful";

export async function getAllBlogPosts() {
  const response = await client.getEntries({
    content_type: "blogPost",
    //@ts-ignore
    order: `-sys.createdAt`,
  });

  return response.items;
}

export async function getBlogPostBySlug(slug: any) {
  const response = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": slug,
    limit: 1,
  });

  return response.items[0];
}
