module.exports = {
	plugins: [
		`stylelint-scss`,
		`stylelint-order`,
		`stylelint-config-rational-order/plugin`,
	],
	extends: [`stylelint-config-prettier`, `stylelint-config-rational-order`],
	rules: {
		indentation: `tab`,
		'at-rule-no-unknown': null,
		'scss/at-rule-no-unknown': true,
		'order/properties-order': [],
		'plugin/rational-order': [
			true,
			{
				'border-in-box-model': false,
				'empty-line-between-groups': false,
			},
		],
	},
};
