<template lang="pug">
	product-section-box
		.sub-section-title Cubox
		.content
			div A JavaScript camera app to make 3D cuboid model from 2 photos without WebGL and any servers' power
			.box
				product-section-link(:href="$url.demo.cubox") Demo
				product-section-link(href="https://github.com/knt5/cubox") GitHub
			.box
				img.image(src="@/assets/img/product/cubox/cubox1.jpg")
				img.image(src="@/assets/img/product/cubox/cubox2.jpg")
			.box
				div
					span I made this in&nbsp;
					a(href="https://www.facebook.com/devcampfun") DevCamp
					span &nbsp;2013 (hackathon) and won the 1st prize. ➔&nbsp;
					a(href="https://youtu.be/K7cLuRUGL08?t=1m38s") YouTube
			.card-box
				.card
					.small-title Documents
					.box
						product-section-link(href="http://knt5lab.appspot.com/software/cubox/pdf/intro-en.pdf") Abstract
						product-section-link(href="http://knt5lab.appspot.com/software/cubox/pdf/20130608_BuildersHUB.pdf") Technology description 🇯🇵
			.card-box
				.card
					.small-title First release
					.box
						product-section-link(href="https://github.com/knt5/cubox/commit/45d2397d25104ab82fec7dd3343f5aa607f36a81")
							| 2013.04.29 45d2397
						.notice * The DevCamp 2013 was held on April 27-28, 2013. This app was born on April 28.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductSectionBox from '@/components/ProductSectionBox.vue';
import ProductSectionLink from '@/components/ProductSectionLink.vue';

/** ProductSectionCubox */
@Component({
	components: {
		ProductSectionBox,
		ProductSectionLink,
	},
})
export default class ProductSectionCubox extends Vue {}
</script>

<style lang="scss" scoped>
@import '~@/styles/notice';
@import '~@/styles/product';
@import '~@/styles/section';
@import '~@/styles/title';

.small-title {
	@extend %small-title;
}

.card-box {
	@extend %card-box;
}

.card {
	@extend %card;
}

.image {
	width: 100%;
	max-width: 420px;
	margin: 5px 5px 0 0;
}

.notice {
	@extend %notice;
}
</style>
