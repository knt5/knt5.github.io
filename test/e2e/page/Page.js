class Page {
	constructor(path) {
		this.path = path;
	}

	open() {
		browser.url(this.path);
	}
}

module.exports = Page;
