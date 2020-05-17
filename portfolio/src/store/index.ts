import Vue from 'vue';
import Vuex from 'vuex';
import { config } from 'vuex-module-decorators';

Vue.use(Vuex);

// Set rawError to true by default on all @Action decorators
// to throw Errors from @Action
config.rawError = true;

// Empty (use dyanamic mode)
export default new Vuex.Store({});
