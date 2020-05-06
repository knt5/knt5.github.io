const path = require(`path`);
const fs = require(`fs-extra`);

//=============================================================================
// Settings

const sourceDir = path.resolve(__dirname, `../../dist/`);

const destDir = path.resolve(__dirname, `../../../`);

const targets = [
	`index.html`,
	`build`,
];

//=============================================================================
// Remove
targets.forEach(target => {
	const targetPath = `${destDir}/${target}`;
	console.log(`Remove ${targetPath}`);
	fs.removeSync(targetPath);
});

// Copy
targets.forEach(target => {
	const sourcePath = `${sourceDir}/${target}`;
	const destPath = `${destDir}/${target}`;
	console.log(`Copy ${sourcePath} --> ${destPath}`);
	fs.copySync(sourcePath, destPath);
});
