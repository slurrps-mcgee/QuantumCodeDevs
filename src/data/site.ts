/** Site-wide constants and page content data. */

export const siteName = 'Quantum Code Devs';
export const siteUrl = 'https://quantumcodedevs.com';
export const siteEmail = 'hello@quantumcodedevs.com';
export const defaultDescription =
	'Modern websites and software applications for ambitious businesses.';
export const defaultTitle = `${siteName} | Web, Mobile & Desktop Development`;
export const organizationDescription =
	'Solo software LLC building websites and custom web, mobile, and desktop applications.';

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

export type NavKey = 'home' | 'about' | 'services' | 'developers' | 'contact' | 'blog';

export const navItems: { label: string; href: string; key: NavKey }[] = [
	{ label: 'Home', href: '/', key: 'home' },
	{ label: 'About', href: '/about', key: 'about' },
	{ label: 'Services', href: '/services', key: 'services' },
	{ label: 'Developers', href: '/developers', key: 'developers' },
	{ label: 'Contact', href: '/contact', key: 'contact' },
	{ label: 'Blog', href: '/blog', key: 'blog' }
];

export const legalLinks = [
	{ label: 'Privacy Policy', href: '/privacy' },
	{ label: 'Terms & Conditions', href: '/terms-and-conditions' },
	{ label: 'Data Retention Policy', href: '/data-retention-policy' },
	{ label: 'RSS Feed', href: '/rss.xml' }
] as const;

export const pageMeta = {
	home: {
		title: `${siteName} | Web, Mobile & Desktop Software`,
		description:
			'Solo LLC building conversion-focused websites and custom web, mobile, and desktop apps with Astro, Angular, Ionic, Electron, and NestJS.'
	},
	about: {
		title: `About ${siteName} | Solo Software LLC`,
		description:
			`Meet ${siteName} — a solo LLC delivering websites and custom software with direct communication, clear scope, and iterative shipping.`
	},
	services: {
		title: `Services & Pricing | ${siteName}`,
		description:
			'Website, web app, mobile, desktop, and NestJS backend development with transparent pricing from $50/hr and fixed-scope project ranges.'
	},
	developers: {
		title: `Kenneth Lamb | Developer at ${siteName}`,
		description:
			`Kenneth Lamb is the solo founder behind ${siteName} — Astro, Angular, Ionic, Electron, NestJS, and .NET for production software.`
	},
	contact: {
		title: `Contact | ${siteName}`,
		description:
			`Start a project with ${siteName}. Share goals, timeline, and platforms — typically a response within one business day.`
	},
	blog: {
		title: `Engineering Blog | ${siteName}`,
		description:
			`Practical guides on MVP scoping, software delivery, and choosing web, mobile, or desktop platforms from ${siteName}.`
	},
	privacy: {
		title: `Privacy Policy | ${siteName}`,
		description:
			`How ${siteName} collects, uses, and protects personal information from website visitors and client inquiries.`
	},
	terms: {
		title: `Terms & Conditions | ${siteName}`,
		description:
			`Terms governing use of the ${siteName} website and professional software development services.`
	},
	dataRetention: {
		title: `Data Retention Policy | ${siteName}`,
		description:
			`How long ${siteName} retains client, project, and website interaction data, and when records are deleted.`
	}
} as const;

export const rss = {
	title: `${siteName} Blog`,
	description: 'Strategy, architecture, and delivery insights for websites and custom software.'
} as const;

export const homeServiceCards = [
	{
		title: 'Website Development',
		description:
			'Conversion-focused websites, landing pages, and content platforms designed to scale with your brand.'
	},
	{
		title: 'Application Engineering',
		description:
			'Robust web, mobile, and desktop software with performance, security, and usability built in from day one.'
	},
	{
		title: 'Ongoing Product Support',
		description:
			'Iterative improvements, analytics-led optimization, and long-term technical guidance after launch.'
	}
] as const;

export const processSteps = [
	{
		step: '01 Discovery',
		title: 'Define Goals',
		description:
			'We map requirements, user needs, and key success metrics before any implementation begins.'
	},
	{
		step: '02 Blueprint',
		title: 'Plan Scope',
		description:
			'You receive a delivery plan with milestones, architecture direction, and clear estimate ranges.'
	},
	{
		step: '03 Build',
		title: 'Ship Iteratively',
		description:
			'We release in small increments with weekly demos, keeping momentum and reducing project risk.'
	},
	{
		step: '04 Scale',
		title: 'Optimize Growth',
		description:
			'After launch, we monitor usage, improve performance, and evolve your product roadmap.'
	}
] as const;

export const technologyColumns = [
	{
		title: 'Frontend',
		description:
			'Astro, Angular 20, TypeScript, Angular Material, Ionic UI, SCSS, Tailwind CSS, NgRx, Angular Signals, RxJS.'
	},
	{
		title: 'Backend',
		description:
			'Node.js LTS with NestJS (primary), REST APIs, optional GraphQL, JWT/OAuth2 auth flows, RBAC, Swagger.'
	},
	{
		title: 'Data & Real-Time',
		description:
			'MySQL 8 with Sequelize, migrations and transactions, plus Socket.IO / NestJS gateways for live features.'
	},
	{
		title: 'DevOps',
		description:
			'GitHub Actions CI/CD, Docker + Compose, Nginx reverse proxy, and deployment on VPS or cloud infrastructure.'
	}
] as const;

export const homeQuickLinks = [
	{
		label: 'Portfolio',
		textClass: 'text-cyan-300',
		hoverClass: 'hover:border-cyan-300',
		href: urls.portfolio,
		title: 'Your portfolio site'
	},
	{
		label: 'GitHub',
		textClass: 'text-violet-300',
		hoverClass: 'hover:border-violet-300',
		href: urls.githubPersonal,
		title: 'Your GitHub profile'
	}
] as const;

export const servicePillars = [
	{
		title: 'Product Discovery',
		description: 'We map business goals to technical requirements, reducing expensive pivots later.'
	},
	{
		title: 'Design + Build',
		description: 'UX, interface systems, and robust implementation developed as one integrated process.'
	},
	{
		title: 'Launch + Grow',
		description: 'Post-launch support, performance tuning, and roadmap planning for continuous growth.'
	}
] as const;

export const deliveryModel = [
	{
		title: 'Weekly Momentum',
		description:
			'Structured check-ins, async updates, and review demos ensure progress is visible and decisions are quick.'
	},
	{
		title: 'Roadmap-Driven Execution',
		description:
			'We break work into practical milestones tied to business outcomes, not just feature lists.'
	},
	{
		title: 'Modern Engineering Stack',
		description:
			'Angular, Ionic, Electron, NestJS, MySQL, and C# / .NET power scalable systems with a clean TypeScript-first foundation.'
	},
	{
		title: 'Support Beyond Launch',
		description:
			'We continue with optimization, enhancements, and technical advisory as your product evolves.'
	}
] as const;

export const industries = [
	'Service businesses modernizing operations and sales workflows',
	'Startups validating MVP products and scaling into v2 platforms',
	'Internal teams replacing spreadsheets and legacy tools with purpose-built software',
	'Organizations needing secure web portals, dashboards, and admin systems'
] as const;

export const engagements = [
	{
		title: 'Fixed-Scope Build',
		description: 'Best for clearly defined deliverables and timelines.'
	},
	{
		title: 'Monthly Retainer',
		description: 'Ongoing development and iteration for growing products.'
	},
	{
		title: 'Technical Partner Support',
		description: 'Architecture planning, codebase audits, and team enablement.'
	}
] as const;

export const coreServices = [
	{
		title: 'Web Application Delivery',
		description:
			'Astro and Angular-based platforms, admin systems, portals, and dashboards with strong UX and scalable architecture.'
	},
	{
		title: 'Mobile Application Delivery',
		description:
			'Ionic + Angular mobile apps with Capacitor integrations for native features on Android and iOS.'
	},
	{
		title: 'Desktop Application Delivery',
		description:
			'Electron + Angular desktop tools with offline support, local workflows, and operational reliability.'
	},
	{
		title: 'Backend & API Systems',
		description:
			'NestJS/Node.js APIs, authentication, authorization, integrations, and MySQL-backed data layers. C# / .NET options are available when a Microsoft stack is the right fit.'
	}
] as const;

export const includedItems = [
	{
		label: 'Planning',
		description: 'Scope definition, milestones, timeline mapping, and risk alignment.'
	},
	{
		label: 'Delivery',
		description: 'Iterative builds with weekly progress demos and actionable feedback loops.'
	},
	{
		label: 'Quality',
		description: 'Production standards for maintainability, performance, and operational stability.'
	},
	{
		label: 'Handover',
		description: 'Documentation, deployment guidance, and post-launch support options.'
	}
] as const;

export const pricingFactors = [
	{
		label: 'Complexity',
		description: 'Advanced features, integrations, and custom workflows increase effort.'
	},
	{
		label: 'Timeline',
		description: 'Tight deadlines usually require added team capacity and premium rates.'
	},
	{
		label: 'Location',
		description: 'Typical rates differ across regions and talent markets.'
	}
] as const;

export const techStack = [
	{
		label: 'Web Platforms',
		description:
			'Astro, Tailwind CSS, TypeScript, component-driven architecture, and content modeling for scalable websites and portals.'
	},
	{
		label: 'Web Apps',
		description: 'Angular 20, TypeScript, Angular Material, SCSS, Tailwind CSS, NgRx, Angular Signals.'
	},
	{
		label: 'Mobile Apps',
		description: 'Ionic + Angular with Capacitor for Android/iOS and native integrations.'
	},
	{
		label: 'Desktop Apps',
		description: 'Electron + Angular with local storage, file-system access, and offline support.'
	},
	{
		label: 'Backend',
		description: 'Node.js LTS + NestJS, JWT/OAuth2 auth, RBAC, validation, and Swagger docs.'
	},
	{
		label: 'Database',
		description: 'MySQL 8 with Sequelize (or TypeORM/Prisma), migrations, pooling, and transactions.'
	},
	{
		label: 'DevOps',
		description: 'Docker, GitHub Actions, Nginx, and cloud/VPS deployment pipelines.'
	}
] as const;

export const hourlyRate = '$50/hr';

export const projectPricing = {
	web: [
		{ label: 'Basic website', range: '$1,000 - $5,000' },
		{ label: 'Small web app', range: '$5,000 - $15,000' },
		{ label: 'Medium complexity', range: '$15,000 - $50,000' },
		{ label: 'Complex platform', range: '$50,000 - $150,000+' }
	],
	mobile: [
		{ label: 'Simple mobile app', range: '$5,000 - $15,000' },
		{ label: 'Moderate app', range: '$15,000 - $50,000' },
		{ label: 'Complex app', range: '$50,000 - $150,000+' }
	],
	desktop: [
		{ label: 'Simple desktop app', range: '$5,000 - $15,000' },
		{ label: 'Medium complexity', range: '$15,000 - $40,000' },
		{ label: 'Complex desktop app', range: '$40,000 - $100,000+' }
	]
} as const;

export const developerStrengths = [
	{
		title: 'Frontend',
		description: 'Astro, Angular, Ionic, Tailwind CSS, SCSS, RxJS, NgRx, Angular Signals.'
	},
	{
		title: 'Backend',
		description: 'NestJS, Node.js, MySQL, API design, auth flows, and integrations.'
	},
	{
		title: 'Desktop',
		description: 'Electron apps with offline support and native integration points.'
	},
	{
		title: 'Microsoft Stack',
		description: 'C# / .NET when a project benefits from a Microsoft platform fit.'
	}
] as const;

export const developerLinks = [
	{
		label: 'Portfolio',
		textClass: 'text-cyan-300',
		hoverClass: 'hover:border-cyan-300',
		href: urls.portfolio,
		description: `Visit the main portfolio / personal site for ${siteName}.`
	},
	{
		label: 'GitHub',
		textClass: 'text-violet-300',
		hoverClass: 'hover:border-violet-300',
		href: urls.github,
		description: `Visit the GitHub profile for ${siteName}.`
	}
] as const;

export const contactForm = {
	projectTypes: [
		'Business Website',
		'Web Application',
		'Mobile Application',
		'Desktop Application',
		'Backend / API Development',
		'Ongoing Support'
	],
	services: [
		'Discovery & Planning',
		'UI/UX Design',
		'Frontend Development',
		'Backend/API Development',
		'DevOps & Deployment',
		'Post-launch Support'
	],
	budgets: ['$1k - $5k', '$5k - $15k', '$15k - $50k', '$50k+'],
	timelines: [
		'ASAP (0-2 weeks)',
		'Near term (2-6 weeks)',
		'Planned (1-3 months)',
		'Flexible / Exploring'
	],
	messagePlaceholder:
		'Tell us what success looks like, your current challenges, and key requirements.',
	subject: 'New project inquiry from website'
} as const;
