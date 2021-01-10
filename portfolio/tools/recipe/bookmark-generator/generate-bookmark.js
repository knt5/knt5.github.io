const path = require(`path`);
const fs = require(`fs`);
const dayjs = require(`dayjs`);
const scrapeOpenGraph = require(`open-graph-scraper`);

//=============================================================================
// Settings

const dateFormat = `YYYY.MM.DD`;

const jsonFilePath = path.resolve(
	__dirname,
	`../../../public/build/api/recipe/bookmark.json`
);

const tsvFilePath = path.resolve(__dirname, `./bookmark.tsv`);

//=============================================================================
// Utils

function getUserId(comment) {
	switch (comment) {
		case `wife`:
			return comment;
		default:
			return `knt5`;
	}
}

async function getOpenGraph(url) {
	return new Promise((resolve, reject) => {
		scrapeOpenGraph({ url }, (error, openGraph) => {
			if (error) {
				reject(error);
			} else {
				resolve(openGraph);
			}
		});
	});
}

function getCategory(comment) {
	switch (comment) {
		case `tech`:
			return comment;
		default:
			return `recipe`;
	}
}

//=============================================================================
// Generate

async function generate() {
	const json = JSON.parse(fs.readFileSync(jsonFilePath).toString());
	const savedUrlSet = new Set(json.bookmarks.map(bookmark => bookmark.url));
	const lines = fs
		.readFileSync(tsvFilePath)
		.toString()
		.split(`\n`)
		.filter(line => line)
		.reverse();

	const bookmarks = [];

	for (const line of lines) {
		const columns = line.split(`\t`);
		if (columns.length !== 3) {
			throw new Error(
				`Tsv file format error: columns.length must be 3. (${columns.length})`
			);
		}

		const [date, comment, url] = columns;

		if (savedUrlSet.has(url)) {
			console.log(`Skip: ${url}`);
			continue;
		}

		const today = dayjs(new Date()).format(dateFormat);
		const createdAt = date ? dayjs(date).format(dateFormat) : today;
		const createdBy = getUserId(comment);

		let openGraph;
		try {
			openGraph = (await getOpenGraph(url)).data;	
		} catch (error) {
			console.error(`---------------------------------------`);
			console.error(error);
			console.error(`Failed to get open graph:`);
			console.error(url);
			console.error(`---------------------------------------`);
			continue;
		}
		console.log(openGraph);

		const bookmark = {
			createdAt,
			createdBy,
			updatedAt: today,
			category: getCategory(comment),
			title: openGraph.ogTitle ? openGraph.ogTitle : ``,
			site: openGraph.ogSiteName ? openGraph.ogSiteName : ``,
			url,
			imageUrl: openGraph.ogImage.url, // if no ogImage, throw Error
		};

		bookmarks.push(bookmark);
	}

	fs.writeFileSync(
		jsonFilePath,
		JSON.stringify({ bookmarks: bookmarks.concat(json.bookmarks) }, null, `\t`)
	);
}

generate();
