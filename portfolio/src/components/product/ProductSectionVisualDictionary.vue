<template lang="pug">
	product-section-box
		.sub-section-title Visual Dictionary
		.content
			div
				img.icon(src="@/assets/img/product/visual-dictionary/icon.png")
			.box Search words with images
			.box
				product-section-link(href="https://github.com/knt5/visual-dictionary-mac") GitHub
			div
				img.image(src="@/assets/img/product/visual-dictionary/visual-dictionary.png")
			.card-box
				.card
					.small-title First release
					.box
						product-section-link(href="https://github.com/knt5/visual-dictionary-mac/commit/ad204094d22368b80665c4d7549d4a3686d0b49f")
							| 2016.09.06 ad20409
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductSectionBox from '@/components/ProductSectionBox.vue';
import ProductSectionLink from '@/components/ProductSectionLink.vue';

/** ProductSectionVisualDictionary */
@Component({
	components: {
		ProductSectionBox,
		ProductSectionLink,
	},
})
export default class ProductSectionVisualDictionary extends Vue {}
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
	margin-top: 0;
}

.card {
	@extend %card;
}

.icon {
	width: 100%;
	max-width: 128px;
}

.image {
	width: 100%;
	max-width: 720px;
}
</style>
