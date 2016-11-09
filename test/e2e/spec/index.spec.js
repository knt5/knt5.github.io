// const expect = require('chai').expect;
const IndexPage = require('../page/IndexPage');

describe('index page', () => {
	let indexPage;

	before(() => {
		indexPage = new IndexPage();
		indexPage.open();
	});

	it('Render the page on any browsers. (This is not a test)', () => {
		browser.saveDocumentScreenshot(
			`test/e2e/result/${browser.desiredCapabilities.browserName}.png`);
	});
});
