<template lang="pug">
	product-section-box
		.sub-section-title THE FUR
		.content
			div Make everything fluffy 🐈
			.box
				product-section-link(:href="$url.demo.fur") Demo
				product-section-link(href="https://github.com/knt5/fur-shader") GitHub
			div
				img.image(src="@/assets/img/product/fur/fur.jpg")
			.card-box
				.card
					.small-title First release
					.box
						a(href="https://github.com/knt5/fur-shader/commit/2d5440c9c0a23cb6854920524691e4dc091ee40b")
							| 2016.07.17
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductSectionBox from '@/components/ProductSectionBox.vue';
import ProductSectionLink from '@/components/ProductSectionLink.vue';

/** ProductSectionFur */
@Component({
	components: {
		ProductSectionBox,
		ProductSectionLink,
	},
})
export default class ProductSectionFur extends Vue {}
</script>

<style lang="scss" scoped>
@use '~@/styles/product';
@use '~@/styles/section';
@use '~@/styles/title';

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
