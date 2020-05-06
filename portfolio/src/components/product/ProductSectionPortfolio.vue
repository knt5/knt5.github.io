<template lang="pug">
	product-section-box
		.sub-section-title Portfolio site
		.content
			.card-box
				.card
					.small-title Version.2 (now)
					.box
							product-section-link(href="https://github.com/knt5/knt5.github.io") GitHub
					div
						div TypeScript
						div Vue.js + vue cli
						div 2020/05/07 -
				.card
					.small-title Version.1
					.box
						product-section-link(:href="$url.demo.portfolio.v1") Demo
						product-section-link(href="https://github.com/knt5/knt5.github.io/demo/portfolio/v1/") GitHub
					div
						div JavaScript
						div Original build system on gulp
						div 2016/11/10 - 2020/05/07
				.card
					.small-title Version.0
					.box
						product-section-link(href="http://knt5lab.appspot.com/") Site
					div
						div Go
						div Google App Engine
						div 2012/07/28 - 2016/11/10
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductSectionBox from '@/components/ProductSectionBox.vue';
import ProductSectionLink from '@/components/ProductSectionLink.vue';

/** ProductSectionConsoleArtist */
@Component({
	components: {
		ProductSectionBox,
		ProductSectionLink,
	},
})
export default class ProductSectionConsoleArtist extends Vue {}
</script>

<style lang="scss" scoped>
@import '~@/styles/product';
@import '~@/styles/section';
@import '~@/styles/title';

.small-title {
	@extend %small-title;
}

.card-box {
	@extend %card-box;
	margin-top: -40px;
}

.card {
	@extend %card;
	padding-top: 60px;
}
</style>
