import Vue from 'vue';

/** Browser plugin */
export default class BrowserPlugin {
	/** Install the plugin  */
	public static install(): void {
		Vue.prototype.$browser = new BrowserPlugin();
	}

	/** The browser is IE or not */
	public isIE(): boolean {
		const userAgent = window.navigator.userAgent.toLowerCase();
		return userAgent.indexOf(`msie`) >= 0 || userAgent.indexOf(`trident`) >= 0;
	}
}
