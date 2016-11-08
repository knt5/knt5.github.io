const chai = require('chai');

module.exports = {
	config: {
		specs: ['test/e2e/spec/**/*.spec.js'],
		exclude: [],
		maxInstances: 10,
		capabilities: [{
			maxInstances: 5,
			browserName: 'chrome',
		}],
		sync: true,
		logLevel: 'verbose',
		coloredLogs: true,
		screenshotPath: './test/e2e/result/',  // error screenshots
		baseUrl: 'http://localhost:8000',
		waitforTimeout: 10000,
		connectionRetryTimeout: 90000,
		connectionRetryCount: 3,
		framework: 'mocha',
		reporters: ['spec'],
		mochaOpts: {
			ui: 'bdd',
		},
		before: (capabilities, specs) => {
			global.expect = chai.expect;
		},
	},
};
