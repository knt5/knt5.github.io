/** digit filter */
export default function digit(value: number): string {
	// Validate because filters are used in templates
	// without checking the type by tsc
	if (typeof value !== `number`) {
		return ``;
	}
	// eslint-disable-next-line prefer-const
	let [integerPart, fractionalPart] = String(value).split(`.`);
	integerPart = integerPart.replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1,`);
	return fractionalPart ? `${integerPart}.${fractionalPart}` : integerPart;
}
