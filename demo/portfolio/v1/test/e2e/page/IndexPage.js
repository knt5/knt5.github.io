const Page = require('./Page');

class IndexPage extends Page {
	constructor(path) {
		super(path);

		if (path === undefined) {
			this.path = '/';
		}
	}

	open() {
		super.open(this.path);
	}
}

module.exports = IndexPage;
