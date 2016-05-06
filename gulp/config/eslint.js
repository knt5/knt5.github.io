module.exports = {
	extends: 'eslint:recommended',
	envs: [
		'browser',
		'node',
		'es6'
	],
	globals: {
		'$': true
	},
	rules: {
		'camelcase': 2,
		'comma-spacing': [2, {'before': false, 'after': true}],
		'comma-style': [2, 'last'],
		'computed-property-spacing': [2, 'never'],
		'eol-last': 2,
		'indent': [2, 'tab'],
		'key-spacing': [2, {'beforeColon': false, 'afterColon': true}],
		'keyword-spacing': 2,
		'linebreak-style': [2, 'unix'],
		'max-len': [2, {'code': 120, 'comments': 180, 'ignoreUrls': true}],
		'no-alert': 2,
		'no-console': 1,
		'no-spaced-func': 2,
		'no-trailing-spaces': [2, { 'skipBlankLines': true }],
		'no-whitespace-before-property': 2,
		'quotes': [2, 'single'],
		'semi': [2, 'always'],
		'semi-spacing': [2, { 'before': false, 'after': true }],
		'space-before-blocks': [2, 'always']
	}
};
