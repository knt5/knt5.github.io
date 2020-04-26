import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

// Plugins
import VueMeta from 'vue-meta';
import BrowserPlugin from '@/plugins/BrowserPlugin';
import RouteNamePlugin from '@/plugins/RouteNamePlugin';
Vue.use(VueMeta, { keyName: `meta` });
Vue.use(BrowserPlugin);
Vue.use(RouteNamePlugin);

// Filters
import digit from '@/filters/digit';
Vue.filter(`digit`, digit);

// CSS
import '@/styles/app.scss';

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount(`#app`);
