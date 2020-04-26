/* eslint-disable */
import Vue from 'vue'
import BrowserPlugin from '@/plugins/BrowserPlugin';
import RouteNamePlugin from '@/plugins/RouteNamePlugin';

// options
declare module 'vue/types/options' {
	interface ComponentOptions<V extends Vue> {
		// vue-meta
		meta?: any,
	}
}

// plugins
declare module 'vue/types/vue' {
	interface Vue {
		$browser: BrowserPlugin,
		$routeName: RouteNamePlugin,
	}
}
