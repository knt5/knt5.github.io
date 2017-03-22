module.exports = {
	extends: './node_modules/stylelint-config-standard',
	rules: {
		indentation: 'tab',
		'no-eol-whitespace': [true, {
			ignore: ['empty-lines'],
		}],
		'rule-empty-line-before': ['always', {
			ignore: ['after-comment', 'inside-block'],
		}],
	}
};
