const Page = require('./Page');

class IndexPage extends Page {
	open() {
		super.open('/');
	}
}

module.exports = IndexPage;
