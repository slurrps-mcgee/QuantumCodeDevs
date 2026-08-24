import { getCollection } from "astro:content";

export async function getSortedBlogPosts() {
  return (await getCollection("blog")).sort(
    (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime(),
  );
}

export async function getRelatedBlogPosts(excludeId: string, limit = 3) {
  return (await getCollection("blog"))
    .filter((item) => item.id !== excludeId)
    .sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime())
    .slice(0, limit);
}

export async function getBlogStaticPaths() {
  return getCollection("blog").then((posts) =>
    posts.map((post) => ({
      params: { slug: post.id },
      props: { post },
    })),
  );
}
