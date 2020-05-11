<template lang="pug">
	product-section-box
		.sub-section-title JPGIS GML converter
		.content
			div
				span A&nbsp;
				a(href="http://fgd.gsi.go.jp/download/") JPGIS GML
				span &nbsp;to GeoJSON converter made for City Generator
			.box
				product-section-link(href="https://www.npmjs.com/package/jpgis-convert") npm
				product-section-link(href="https://github.com/knt5/jpgis-convert") GitHub
			div
				img.image(src="@/assets/img/product/jpgis-convert/jpgis-convert.png")
			.card-box
				.card
					.small-title First release
					.box
						product-section-link(href="https://github.com/knt5/jpgis-convert/commit/830c1334d5f6cdb7aa999daac045b25d3443f8a4")
							| 2016.06.18 830c133
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductSectionBox from '@/components/ProductSectionBox.vue';
import ProductSectionLink from '@/components/ProductSectionLink.vue';

/** ProductSectionJpgisConvert */
@Component({
	components: {
		ProductSectionBox,
		ProductSectionLink,
	},
})
export default class ProductSectionJpgisConvert extends Vue {}
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
