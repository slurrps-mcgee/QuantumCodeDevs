/** Site-wide constants and page content data. */

export const siteName = 'Quantum Code Devs';
export const siteUrl = 'https://quantumcode.dev';
export const siteEmail = 'quantumcodedevs@gmail.com';
export const defaultDescription =
	'Custom websites for small businesses, built directly with an experienced software developer.';
export const defaultTitle = `${siteName} | Custom Website Development`;
export const organizationDescription =
	'A solo software studio that designs and builds custom websites for businesses.';

export const assets = {
	ogImage: '/images/og-default.png',
	logo: '/images/icon-512.png',
	appleTouchIcon: '/apple-touch-icon.png'
} as const;

export const urls = {
	portfolio: 'https://kenny.quantumcode.dev',
	github: 'https://github.com/QuantumCodeDevs',
	githubPersonal: 'https://github.com/slurrps-mcgee'
} as const;

export const sameAs = [urls.portfolio, urls.github] as const;

export type NavKey = 'home' | 'work' | 'services' | 'about' | 'contact' | 'blog';

export const navItems: { label: string; href: string; key: NavKey }[] = [
	{ label: 'Work', href: '/work', key: 'work' },
	{ label: 'Services', href: '/services', key: 'services' },
	{ label: 'About', href: '/about', key: 'about' },
	{ label: 'Contact', href: '/contact', key: 'contact' },
	{ label: 'Blog', href: '/blog', key: 'blog' }
];

export const legalLinks = [
	{ label: 'Privacy Policy', href: '/privacy' },
	{ label: 'Terms & Conditions', href: '/terms-and-conditions' },
	{ label: 'Data Retention Policy', href: '/data-retention-policy' }
] as const;

export const pageMeta = {
	home: {
		title: `${siteName} | Custom Websites for Businesses`,
		description:
			'Quantum Code Devs builds custom, modern websites for small businesses. Work directly with an experienced software developer. Website projects start at $1,000.'
	},
	work: {
		title: `Work | ${siteName}`,
		description:
			'Selected websites and software projects from Quantum Code Devs, including personal and studio work.'
	},
	about: {
		title: `About | ${siteName}`,
		description:
			'Quantum Code Devs is a solo studio run by Kenneth Lamb, a software developer with 10+ years of experience building custom websites.'
	},
	services: {
		title: `Website Development | ${siteName}`,
		description:
			'Custom website design and development for small businesses. Projects start at $1,000 and are quoted after we understand the scope.'
	},
	contact: {
		title: `Start a Project | ${siteName}`,
		description:
			'Tell Quantum Code Devs about your website project. We typically reply within one business day with next steps and a project quote.'
	},
	blog: {
		title: `Blog | ${siteName}`,
		description: `Articles and updates from ${siteName}.`
	},
	faq: {
		title: `FAQ | ${siteName}`,
		description: `Answers about website pricing, process, and working with ${siteName}.`
	},
	privacy: {
		title: `Privacy Policy | ${siteName}`,
		description: `How ${siteName} collects, uses, and protects personal information from website visitors and project inquiries.`
	},
	terms: {
		title: `Terms & Conditions | ${siteName}`,
		description: `Terms governing use of the ${siteName} website and professional website development services.`
	},
	dataRetention: {
		title: `Data Retention Policy | ${siteName}`,
		description: `How long ${siteName} retains inquiry, project, and website interaction data.`
	}
} as const;

export const rss = {
	title: `${siteName} Blog`,
	description: 'Articles and updates from Quantum Code Devs.'
} as const;

export const hero = {
	eyebrow: 'Website development studio',
	title: 'Websites built by a software developer.',
	description:
		'Custom, modern websites designed to help businesses look professional online and turn visitors into customers.',
	primaryCta: { label: 'Start a Project', href: '/contact' },
	secondaryCta: { label: 'View Our Work', href: '/work' }
} as const;

export const credibilityItems = [
	{
		label: '10+ years',
		title: 'Software experience',
		description: 'A decade of professional development behind every website we ship.'
	},
	{
		label: 'Custom work',
		title: 'Not a template mill',
		description: 'Each site is designed around the business, the audience, and the goals.'
	},
	{
		label: 'Modern build',
		title: 'Fast and responsive',
		description: 'Sites that load quickly, work on phones, and are ready for search and analytics.'
	},
	{
		label: 'Direct line',
		title: 'One developer',
		description: 'You work with the person designing and building the site. No sales handoff.'
	}
] as const;

export const websiteIncludes = [
	'Custom design',
	'Responsive development',
	'Contact forms',
	'SEO foundations',
	'Analytics setup',
	'Performance-conscious build',
	'Launch and hosting guidance',
	'Post-launch support'
] as const;

export const processSteps = [
	{
		step: '01',
		title: 'Tell us about your project',
		description: 'Share your business, goals, and what you need the website to do.'
	},
	{
		step: '02',
		title: 'Define the project',
		description: 'We agree on scope, timeline, requirements, and a clear project price.'
	},
	{
		step: '03',
		title: 'Build',
		description: 'Design, development, review, and communication throughout the work.'
	},
	{
		step: '04',
		title: 'Launch',
		description: 'The site goes live, and you have what you need to use and maintain it.'
	}
] as const;

export const pricing = {
	startingAt: '$1,000',
	headline: 'Website projects starting at $1,000.',
	body: 'Every project is different. After we understand your goals, content, and requirements, you receive a clear project quote — not an open-ended hourly surprise.'
} as const;

export const aboutPreview = {
	eyebrow: 'Meet the developer',
	title: 'You work directly with Kenneth Lamb.',
	body: 'Quantum Code Devs is a solo studio. There is no account manager and no handoff. You talk with the developer who is designing and building the website.',
	cta: { label: 'About the studio', href: '/about' },
	portfolioLabel: 'Learn more about Kenneth and his broader software development experience.',
	portfolioHref: urls.portfolio
} as const;

export const finalCta = {
	title: 'Have a website project in mind?',
	body: 'Tell us what you are looking to build and we will determine whether Quantum Code Devs is a good fit.',
	button: 'Start a Project'
} as const;

export const servicePage = {
	eyebrow: 'Services',
	title: 'Website development, focused on the business.',
	description:
		'Quantum Code Devs designs and builds custom websites for small businesses, professional services, and organizations that need a stronger online presence.',
	primary: {
		title: 'Website Development',
		body: 'Custom websites designed and developed around your business, your audience, and your goals — not a reused template with a new logo.'
	},
	secondary:
		'Have a project that goes beyond a website? We also have experience building custom desktop and mobile applications. Those projects are quoted separately.'
} as const;

export const aboutPage = {
	eyebrow: 'About',
	title: 'A small studio with serious software experience.',
	description:
		'Quantum Code Devs is operated by Kenneth Lamb, a software developer with 10+ years of professional experience. The studio is intentionally small so communication stays direct and the work stays focused.',
	points: [
		{
			title: 'Direct communication',
			body: 'You are not passed between a salesperson, a project manager, and a developer. You work with Kenneth.'
		},
		{
			title: 'Built around the business',
			body: 'The website is planned from your audience, offer, and content — not from a generic industry template.'
		},
		{
			title: 'Engineering behind the site',
			body: 'Years of software work show up as clean structure, careful performance, and a site that is maintainable after launch.'
		}
	]
} as const;

export const contactPage = {
	eyebrow: 'Start a project',
	title: 'Tell us about the website you need.',
	description:
		'Share a little context. We typically reply within one business day with whether the project is a fit, what we would need to quote it, and suggested next steps.',
	emailLabel: 'Email',
	locationLabel: 'Location',
	locationValue: 'Remote, working with clients anywhere',
	afterSubmit: [
		'We review your goals, current site, timeline, and budget range.',
		'You receive a reply with fit, questions, and an initial direction.',
		'If it looks like a match, we define scope and send a project quote.'
	]
} as const;

export const contactForm = {
	websiteTypes: ['New website', 'Website redesign', 'Something else'],
	budgets: ['$1k – $5k', '$5k – $15k', '$15k+', 'Not sure'],
	timelines: ['As soon as possible', 'In the next 1–2 months', 'Later this year', 'Just exploring'],
	messagePlaceholder:
		'Describe the business, what the site needs to do, and anything else that would help us understand the project.',
	subject: 'New website project inquiry'
} as const;
