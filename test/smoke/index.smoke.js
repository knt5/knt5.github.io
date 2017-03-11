const request = require('supertest');
const cheerio = require('cheerio');

// Settings
const base = 'http://localhost:8000';
const ignoreLinks = new Set([
	'https://www.facebook.com/knt5f',
]);
const maxRidirects = 2;

// index
describe('Smoke testing: index page', () => {
	const path = '/';

	it('Every link response is 200', (done) => {
		const links = [];
		let requestCount = 0;
		let doneCount = 0;

		request(base)
			.get(path)
			.end((err, res) => {
				if (err) {
					done(err);
				} else {
					const $ = cheerio.load(res.text);

					$('a').each((i, el) => {
						const link = $(el).prop('href');
						if (!ignoreLinks.has(link)) {
							links.push(link);
						}
					});

					testLink(0);
				}
			});

		function testLink(i) {
			const link = links[i];
			let url;

			// Generate url
			if (link.match(/^http[s]?:\/\//)) {
				url = link;
			} else if (link.startsWith('/')) {
				url = base + link;
			} else {
				url = base + path + link;
			}

			console.log(`      ${url}`);

			// Request
			request(url)
				.head('')
				.redirects(maxRidirects)
				.expect(200)
				.end((error) => {
					if (error) {
						done(error);
					} else {
						doneCount++;
						if (doneCount >= links.length) {
							done();
						}
					}
				});
			
			// Next request
			requestCount++;
			if (requestCount < links.length) {
				testLink(i + 1);
			}
		}
	});
});
