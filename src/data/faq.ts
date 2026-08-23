import { websiteIncludes } from './site';

export const faqPage = {
	eyebrow: 'FAQ',
	title: 'Questions before you start a project.',
	description:
		'Straightforward answers about pricing, process, and what it is like to work with a solo studio.'
} as const;

export type FaqItem = {
	question: string;
	paragraphs: string[];
	list?: string[];
	closing?: string;
	link?: { href: string; label: string };
};

export const faqItems: FaqItem[] = [
	{
		question: 'How much does a website cost?',
		paragraphs: [
			'Website projects start at $1,000. The final price depends on the number of pages, the content you already have, and any specific features such as forms or extra sections.',
			'After we understand the scope, you receive a clear project quote. We do not publish an hourly rate.'
		]
	},
	{
		question: 'How long does a project take?',
		paragraphs: [
			'Timeline depends on scope and how quickly content is ready. A focused marketing site can move quickly; a larger rebuild takes longer.',
			'We agree on a timeline before build work starts, so you know what to expect.'
		]
	},
	{
		question: 'Who will I work with?',
		paragraphs: [
			'You work directly with Kenneth Lamb, the developer who designs and builds the site. There is no sales team and no handoff to another person.'
		]
	},
	{
		question: 'Do you work remotely?',
		paragraphs: [
			'Yes. Quantum Code Devs is remote and works with clients anywhere. Communication happens by email, video call, and written project updates.'
		]
	},
	{
		question: 'What is included in a website project?',
		paragraphs: ['A typical website engagement can include:'],
		list: [...websiteIncludes],
		closing: 'Exact inclusions are confirmed in the project quote so the scope stays clear.'
	},
	{
		question: 'What should I have ready before a website project?',
		paragraphs: [
			'A project moves faster when the business side is clear before design starts. Write down what the site needs to do — for example, help people understand the business, make it easy to get in touch, show services, or replace an outdated site.'
		],
		list: [
			'A short description of the company',
			'Services or offers',
			'Contact details',
			'Photos or existing brand files, if you have them',
			'Any pages that must exist on day one'
		],
		closing:
			'A first version should include the pages people need now. Extra sections and future ideas can follow after launch. Once those pieces are in view, it is much easier to agree on timeline, content, and a project price.'
	},
	{
		question: 'How does a website project typically run?',
		paragraphs: ['Most engagements follow four steps:'],
		list: [
			'Tell us about the project: the business, the current site if there is one, and what you need the new site to do.',
			'Define the work: pages, timeline, content needs, and a project price before build work starts.',
			'Build: design and development happen in the open. You review the site as it takes shape.',
			'Launch: the site goes live, and you have what you need to use it. Support after launch is available when you want it.'
		]
	},
	{
		question: 'When is a custom website better than a template?',
		paragraphs: [
			'Templates are useful. They are not always the right tool.',
			'A template can be enough when the business needs a simple presence quickly, the offer is straightforward, and you are comfortable working inside the template’s limits.',
			'A custom website is a better fit when the current site no longer matches the business, the layout fights the content, you need specific pages or forms, or you want something that can grow without starting over.',
			'A custom website is planned around the business. The pages, writing, and structure are chosen to help a visitor understand the offer and take the next step.'
		]
	},
	{
		question: 'Do you build mobile or desktop apps?',
		paragraphs: [
			'The primary offer is custom websites. We also have experience building custom desktop and mobile applications. Those projects are quoted separately and do not replace the website work as the main service.'
		]
	},
	{
		question: 'How do we get started?',
		paragraphs: [
			'Use the project form on the contact page. Share a little about the business, the current site if you have one, timeline, and budget range. We typically reply within one business day with whether the project is a fit and what we would need to quote it.'
		],
		link: { href: '/contact', label: 'Start a project' }
	}
];

export function faqPlainText(item: FaqItem) {
	return [item.paragraphs.join(' '), item.list?.join(' '), item.closing, item.link?.href]
		.filter(Boolean)
		.join(' ');
}
