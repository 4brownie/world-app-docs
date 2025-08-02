module.exports = {
	title: 'World Symposium Docs',
	tagline: 'Guide to managing the World Symposium project',
	url: 'https://your-username.github.io',
	baseUrl: '/world-app-docs/',
	organizationName: 'your-username',
	projectName: 'world-app-docs',
	favicon: '/img/favicon.ico',
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/your-username/world-app-docs/edit/main/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	],
	themeConfig: {
		navbar: {
			title: 'World Plan and Milestone',
			// logo: {
			// 	alt: 'World Logo',
			// 	src: '/static/image/logo.png',
			// },
			items: [
				{
					type: 'doc',
					docId: 'intro',
					position: 'left',
					label: 'Home',
				},
				{
					type: 'dropdown',
					label: 'Getting Started',
					position: 'left',
					items: [
						{
							type: 'doc',
							docId: 'getting-started/installation',
							label: 'Installation',
						},
						{
							type: 'doc',
							docId: 'getting-started/quick-start',
							label: 'Quick Start',
						},
					],
				},
				{
					type: 'dropdown',
					label: 'Development',
					position: 'left',
					items: [
						{
							type: 'doc',
							docId: 'front-end-dev/architecture',
							label: 'Architecture',
						},
					],
				},
				{
					type: 'dropdown',
					label: 'Plan and Milestones',
					position: 'left',
					items: [
						{
							type: 'doc',
							docId: 'plan-milestones/overview',
							label: 'Overview',
						},
						{
							type: 'doc',
							docId: 'plan-milestones/creating-plans',
							label: 'Creating Plans',
						},
						{
							type: 'doc',
							docId: 'plan-milestones/managing-milestones',
							label: 'Managing Milestones',
						},
						{
							type: 'doc',
							docId: 'plan-milestones/collaboration',
							label: 'Collaboration',
						},
					],
				},
				{
					type: 'doc',
					docId: 'faq',
					position: 'left',
					label: 'FAQ',
				},
			],
		},
	},
};
