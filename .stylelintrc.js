module.exports = {
	extends: './node_modules/stylelint-config-standard',
	rules: {
		indentation: 'tab',
		'no-eol-whitespace': [
			true,
			{
				ignore: ['empty-lines'],
			}
		],
	}
};
