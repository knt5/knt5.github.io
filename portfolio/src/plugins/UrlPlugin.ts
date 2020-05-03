import Vue from 'vue';

/** URL plugin */
export default class UrlPlugin {
	/** Install the plugin  */
	public static install(): void {
		Vue.prototype.$url = new UrlPlugin();
	}

	/** knt5 GitHub */
	readonly github = `https://github.com/knt5`;
}
