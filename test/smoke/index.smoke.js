const request = require('supertest');
const cheerio = require('cheerio');

describe('Smoke testing: index page', () => {
	const base = 'http://localhost:8000';
	const path = '/';
	const ignoreLinks = new Set([
		'https://www.facebook.com/knt5f',
	]);
	const maxRidirects = 2;

	it('Every link response is 200', (done) => {
		const links = [];
		let count = 0;

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

			if (link.match(/^http[s]?:\/\//)) {
				url = link;
			} else if (link.startsWith('/')) {
				url = base + link;
			} else {
				url = base + path + link;
			}

			console.log(`      ${url}`);

			request(url)
				.head('')
				.redirects(maxRidirects)
				.expect(200)
				.end((error) => {
					if (error) {
						done(error);
					} else {
						count++;
						if (count < links.length) {
							testLink(i + 1);
						} else {
							done();
						}
					}
				});
		}
	});
});
