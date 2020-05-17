import Vue from 'vue';
import RouteName from '@/models/router/RouteName';

/** Route name plugin */
export default class RouteNamePlugin {
	/** Install the plugin  */
	public static install(): void {
		Vue.prototype.$routeName = new RouteNamePlugin();
	}

	/** home */
	readonly home = RouteName.Home;

	/** recipe bookmark */
	readonly recipeBookmark = RouteName.RecipeBookmark;
}
