<template lang="pug">
	div
		.section-title Products

		product-section-hakoniwa.first-box

		product-section-separator
		product-section-city-generator

		product-section-separator
		product-section-jpgis-convert

		product-section-separator
		product-section-visual-dictionary

		product-section-separator
		product-section-fur

		product-section-separator
		product-section-cubox

		product-section-separator
		product-section-console-artist

		product-section-separator
		product-section-portfolio
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductSectionBox from '@/components/ProductSectionBox.vue';
import ProductSectionLink from '@/components/ProductSectionLink.vue';
import ProductSectionSeparator from '@/components/ProductSectionSeparator.vue';

// product
import ProductSectionCityGenerator from '@/components/product/ProductSectionCityGenerator.vue';
import ProductSectionConsoleArtist from '@/components/product/ProductSectionConsoleArtist.vue';
import ProductSectionCubox from '@/components/product/ProductSectionCubox.vue';
import ProductSectionFur from '@/components/product/ProductSectionFur.vue';
import ProductSectionHakoniwa from '@/components/product/ProductSectionHakoniwa.vue';
import ProductSectionJpgisConvert from '@/components/product/ProductSectionJpgisConvert.vue';
import ProductSectionPortfolio from '@/components/product/ProductSectionPortfolio.vue';
import ProductSectionVisualDictionary from '@/components/product/ProductSectionVisualDictionary.vue';

/** Product section */
@Component({
	components: {
		ProductSectionBox,
		ProductSectionLink,
		ProductSectionSeparator,

		// product
		ProductSectionCityGenerator,
		ProductSectionConsoleArtist,
		ProductSectionCubox,
		ProductSectionFur,
		ProductSectionHakoniwa,
		ProductSectionJpgisConvert,
		ProductSectionPortfolio,
		ProductSectionVisualDictionary,
	},
})
export default class ProductSection extends Vue {}
</script>

<style lang="scss" scoped>
@import '~@/styles/section';

.first-box {
	margin-top: 40px;
}
</style>
