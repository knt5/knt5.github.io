<template lang="pug">
	product-section-box
		.sub-section-title Console Artist
		.content
			div A web browser console art generator
			.box
				product-section-link(:href="$url.demo.consoleArtist") Demo
				product-section-link(href="https://github.com/knt5/console-artist") GitHub
			div
				img.image(src="@/assets/img/product/console-artist/console-artist1.png")
				img.image(src="@/assets/img/product/console-artist/console-artist2.png")
			.card-box
				.card
					.small-title First release
					.box
						a(href="https://github.com/knt5/console-artist/commit/811d2802aeaffbb4567b20651cbdb02268938634")
							| 2016.05.09
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

.image {
	@extend %product-image;
}

.card-box {
	@extend %card-box;
}

.card {
	@extend %card;
}
</style>
