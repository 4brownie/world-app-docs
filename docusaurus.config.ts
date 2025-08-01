module.exports = {
	title: 'World Plan and Milestone Documentation',
	tagline: 'Guide to managing global projects and milestones',
	url: 'https://your-username.github.io',
	baseUrl: '/world-app-docs/',
	organizationName: 'your-username',
	projectName: 'world-app-docs',
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
			logo: {
				alt: 'World Logo',
				src: 'img/logo.png',
			},
		},
	},
};
