<template lang="pug">
	product-section-box(theme="dark")
		.sub-section-title.title Hakoniwa
		.content
			div JAXA ALOS DSM 3D visualizer
			div - Real Minecraft -
			.box
				product-section-link(:href="$url.demo.hakoniwa") Demo
				product-section-link(href="https://github.com/knt5/hakoniwa") GitHub
		div
			a(:href="$url.demo.hakoniwa")
				img.image(src="@/assets/img/product/hakoniwa/hakoniwa.png")
		.content
			div
				span A 3D visualizer of elevation data including the height of buildings (DSM) which was recorded by the Advanced Land Observing Satellite "
				a(href="https://global.jaxa.jp/projects/sat/alos/index.html") Daichi
				span " of JAXA
			.card-box
				.card
					.small-title.dark-title Article
					.box
						product-section-link(href="https://www.moongift.jp/2016/09/hakoniwa-%E6%A8%99%E9%AB%98%E3%83%A1%E3%83%83%E3%82%B7%E3%83%A5%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%9F3d%E8%A1%A8%E7%A4%BA/")
							| 2016.09.07 MOONGIFT
				.card
					.small-title.dark-title First release
					.box
						product-section-link(href="https://github.com/knt5/hakoniwa/commit/05ca9e00af7343739916574cb83616e74fb04342")
							| 2016.05.24 05ca9e0
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductSectionBox from '@/components/ProductSectionBox.vue';
import ProductSectionLink from '@/components/ProductSectionLink.vue';

/** ProductSectionHakoniwa */
@Component({
	components: {
		ProductSectionBox,
		ProductSectionLink,
	},
})
export default class ProductSectionHakoniwa extends Vue {}
</script>

<style lang="scss" scoped>
@import '~@/styles/section';
@import '~@/styles/title';
@import '~@/styles/variables';

// import after title.scss
@import '~@/styles/product';

.title {
	@extend %dark-title;
	font-size: 40px;
}

.small-title {
	@extend %small-title;
}

// define after .small-title
.dark-title {
	@extend %dark-title;
}

.image {
	width: 100%;
	max-width: $content-width;
	margin-top: 10px;
}

.card-box {
	@extend %card-box;
}

.card {
	@extend %card;
}
</style>
