import Vue from 'vue';

/** Route name plugin */
export default class RouteNamePlugin {
	/** Install the plugin  */
	public static install(): void {
		Vue.prototype.$routeName = new RouteNamePlugin();
	}

	/** Home */
	public home = `home`;
}
