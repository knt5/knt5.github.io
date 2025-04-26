<template lang="pug">
	.not-found
		.content * Page not found *
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

/** Not found */
@Component({
	components: {},
	meta: () => ({ title: `Not found` }),
})
export default class NotFound extends Vue {}
</script>

<style lang="scss" scoped>
@use '~@/styles/layout';

.not-found {
	padding: 120px 0 60px;
	font-size: 32px;
}

.content {
	@extend %content;
	text-align: center;
}
</style>
