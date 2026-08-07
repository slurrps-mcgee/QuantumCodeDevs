import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { rss as rssMeta, siteUrl } from '../data/site';

export async function GET(context: APIContext) {
	const posts = (await getCollection('blog')).sort(
		(a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime()
	);

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
			author: post.data.author
		})),
		customData: '<language>en-us</language>'
	});
}
