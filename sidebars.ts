module.exports = {
	docs: [
		{
			type: 'doc',
			id: 'intro',
			label: 'Introduction',
		},
		{
			type: 'category',
			label: 'Getting Started',
			items: ['getting-started/installation', 'getting-started/quick-start'],
		},
		{
			type: 'category',
			label: 'Plan and Milestones',
			items: [
				'plan-milestones/overview',
				'plan-milestones/creating-plans',
				'plan-milestones/managing-milestones',
				'plan-milestones/collaboration',
			],
		},
		{
			type: 'category',
			label: 'Front End Development',
			items: ['front-end-dev/architecture'],
		},
		{
			type: 'doc',
			id: 'faq',
			label: 'FAQ',
		},
	],
};
