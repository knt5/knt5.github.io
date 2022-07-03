import Vue from 'vue';

/** URL plugin */
export default class UrlPlugin {
	/** Install the plugin  */
	public static install(): void {
		Vue.prototype.$url = new UrlPlugin();
	}

	/** knt5 GitHub */
	readonly github = `https://github.com/knt5`;

	/** knt5 GitHub Pages */
	readonly githubPages = `https://knt5.github.io`;

	/** demo */
	readonly demo: { [name: string]: string | { [name: string]: string } } = {
		hakoniwa: `${this.githubPages}/demo/hakoniwa/`,
		cityGenerator: `${this.githubPages}/demo/city-generator/`,
		fur: `${this.githubPages}/demo/fur/`,
		cubox: `${this.githubPages}/demo/cubox/`,
		consoleArtist: `${this.githubPages}/demo/console-artist/`,
		portfolio: {
			v1: `${this.githubPages}/demo/portfolio/v1/`,
		},
	};
}
