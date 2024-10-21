module.exports = {
	ci: {
		collect: {
			url: ['http://localhost:3000', 'http://localhost:3000/test'],
			numberOfRuns: 2,
			startServerCommand: 'npm run start',
			startServerReadyPattern: 'ready - started server',
			port: 3000,
		},
		assert: {
			assertions: {
				'categories:performance': ['error', { minScore: 0.9 }],
			},
		},
		upload: {
			target: 'filesystem',
			outputDir: './.lighthouseci',
		},
	},
};
