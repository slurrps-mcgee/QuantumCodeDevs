import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getSortedBlogPosts } from "../data/blog";
import { rss as rssMeta, siteUrl } from "../data";

export async function GET(context: APIContext) {
  const posts = await getSortedBlogPosts();

  return rss({
    title: rssMeta.title,
    description: rssMeta.description,
    site: context.site ?? siteUrl,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: `/blog/${post.id}/`,
      categories: [post.data.category],
      author: post.data.author,
    })),
    customData: "<language>en-us</language>",
  });
}
