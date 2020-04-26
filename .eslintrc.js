module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		`plugin:vue/essential`,
		`eslint:recommended`,
		`@vue/typescript/recommended`,
		`@vue/prettier`,
		`@vue/prettier/@typescript-eslint`,
	],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		'no-console': process.env.NODE_ENV === `production` ? `warn` : `off`,
		'no-debugger': process.env.NODE_ENV === `production` ? `warn` : `off`,
		quotes: [`error`, `backtick`],
		'spaced-comment': [
			`error`,
			`always`,
			{
				line: {
					exceptions: [`=`],
				},
				block: {
					balanced: true,
				},
			},
		],
		'prettier/prettier': [
			`error`,
			{
				singleQuote: true,
				useTabs: true,
				trailingComma: `es5`,
				arrowParens: `avoid`,
			},
		],
	},
	overrides: [
		{
			files: [`**/*.ts`, `**/*.vue`],
			rules: {
				'no-redeclare': `off`, // to give namespace and class name the same name
				'@typescript-eslint/no-explicit-any': `error`,
				'@typescript-eslint/explicit-function-return-type': [
					`error`,
					{
						allowExpressions: true,
					},
				],
			},
		},
		{
			files: [
				`**/__tests__/*.{j,t}s?(x)`,
				`**/tests/unit/**/*.spec.{j,t}s?(x)`,
			],
			env: {
				jest: true,
			},
		},
		{
			files: [`**/*.js`],
			rules: {
				'@typescript-eslint/no-var-requires': `off`,
			},
		},
	],
};
