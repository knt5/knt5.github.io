<template lang="pug">
	product-section-box
		.sub-section-title City Generator
		.content
			div A tech demo to predict height of buildings in real time on web browser and generate 3D city
			.box
				product-section-link(:href="$url.demo.cityGenerator") Demo
				product-section-link(href="https://github.com/knt5/city-generator") GitHub
			div
				img.image(src="@/assets/img/product/city-generator/city-generator.png")
			.card-box
				.card
					.small-title Article
					.box
						product-section-link(href="https://www.moongift.jp/2016/09/city-generator-web%E4%B8%8A%E3%81%AB%E5%8B%95%E3%81%8B%E3%81%9B%E3%82%8B3d%E5%9C%B0%E5%9B%B3%E3%82%92%E8%A1%A8%E7%A4%BA/")
							| 2016/09/17 MOONGIFT
				.card
					.small-title First version
					.box
						product-section-link(href="https://github.com/knt5/city-generator/commit/13c3722521915891271c94659509e3673dcb8ae2")
							| 2016/06/24 13c3722
				.card
					.small-title Approved by GSI
					.box
						product-section-link(href="https://github.com/knt5/city-generator/commit/ad1d7f56ceb58f6b33059816e1eaf600f4842f10")
							| 2016/09/21 ad1d7f5
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductSectionBox from '@/components/ProductSectionBox.vue';
import ProductSectionLink from '@/components/ProductSectionLink.vue';

/** ProductSectionCityGenerator */
@Component({
	components: {
		ProductSectionBox,
		ProductSectionLink,
	},
})
export default class ProductSectionCityGenerator extends Vue {}
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
