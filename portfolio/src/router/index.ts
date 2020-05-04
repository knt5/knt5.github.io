import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import ApiManager from '@/managers/ApiManager';
import RouteName from '@/models/router/RouteName';
import Home from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: `/`,
		name: RouteName.Home,
		component: Home,
		caseSensitive: true,
		pathToRegexpOptions: { strict: true },
	},
	{
		path: `*`,
		name: RouteName.NotFound,
		component: NotFound,
	},
];

const router = new VueRouter({
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { x: 0, y: 0 };
		}
	},
});

router.beforeEach((to, from, next) => {
	// Cancel all API connection
	ApiManager.cancel({});
	next();
});

export default router;
