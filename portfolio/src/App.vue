<template lang="pug">
	#app
		app-header
		router-view
		app-footer
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

/** App */
@Component({
	components: {
		AppHeader,
		AppFooter,
	},
})
export default class App extends Vue {}
</script>
