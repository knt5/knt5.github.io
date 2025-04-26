<template lang="pug">
	.product-section-separator
		.line
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

/** ProductSectionSeparator */
@Component({})
export default class ProductSectionSeparator extends Vue {}
</script>

<style lang="scss" scoped>
@use '~@/styles/layout';

.product-section-separator {
	@extend %content;
}

.line {
	width: 75%;
	margin: 75px auto 0;
	border-bottom: 1px solid #ccc;
}
</style>
