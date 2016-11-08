const expect = require('chai').expect;
const request = require('supertest');
const cheerio = require('cheerio');

describe('index page', () => {
	const base = 'http://localhost:8000';
	const path = '/';
	const ignoreLinks = new Set([
		'https://www.facebook.com/knt5f',
	]);
	const maxRidirects = 2;
	
	it('Every link\'s http response is 200', (done) => {
		request(base)
			.get(path)
			.end((err, res) => {
				if (err) {
					done(err);
				} else {
					const $ = cheerio.load(res.text);
					const links = [];
					
					$('a').each((i, el) => {
						const link = $(el).prop('href');
						if (!ignoreLinks.has(link)) {
							links.push(link);
						}
					});
					
					let count = 0;
					testLink(0);
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
							.end((err, res) => {
								if (err) {
									done(err);
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
				}
			});
	});
});
