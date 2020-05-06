<template lang="pug">
	div
		.section-title Products

		//- =======================================================================
		product-section-box.first-box(theme="dark")
			.sub-section-title.dark-title.hakoniwa-title Hakoniwa
			.content
				div JAXA ALOS DSM 3D visualizer
				div - Real Minecraft -
				.box
					product-section-link(:href="$url.demo.hakoniwa") Demo
					product-section-link(href="https://github.com/knt5/hakoniwa") GitHub
			div
				a(:href="$url.demo.hakoniwa")
					img.hakoniwa-image(src="@/assets/img/product/hakoniwa/hakoniwa.png")
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
								| 2016/09/07 MOONGIFT
					.card
						.small-title.dark-title First release
						.box
							product-section-link(href="https://github.com/knt5/hakoniwa/commit/05ca9e00af7343739916574cb83616e74fb04342")
								| 2016/05/24 05ca9e0

		//- =======================================================================
		product-section-separator
		product-section-box
			.sub-section-title City Generator
			.content
				div A tech demo to predict height of buildings in real time on web browser and generate 3D city
				.box
					product-section-link(:href="$url.demo.cityGenerator") Demo
					product-section-link(href="https://github.com/knt5/city-generator") GitHub
				div
					img.product-image(src="@/assets/img/product/city-generator/city-generator.png")
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

		//- =======================================================================
		product-section-separator
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
					img.product-image(src="@/assets/img/product/jpgis-convert/jpgis-convert.png")
				.card-box
					.card
						.small-title First release
						.box
							product-section-link(href="https://github.com/knt5/jpgis-convert/commit/830c1334d5f6cdb7aa999daac045b25d3443f8a4")
								| 2016/06/18 830c133

		//- =======================================================================
		product-section-separator
		product-section-box
			.sub-section-title Visual Dictionary
			.content
				div
					img.visual-dictionary-icon(src="@/assets/img/product/visual-dictionary/icon.png")
				div Search words with images
				.box
					product-section-link(href="https://github.com/knt5/visual-dictionary-mac") GitHub
				div
					img.visual-dictionary-image(src="@/assets/img/product/visual-dictionary/visual-dictionary.png")
				.card-box
					.card
						.small-title First release
						.box
							product-section-link(href="https://github.com/knt5/visual-dictionary-mac/commit/ad204094d22368b80665c4d7549d4a3686d0b49f")
								| 2016/09/06 ad20409

		//- =======================================================================
		product-section-separator
		product-section-box
			.sub-section-title THE FUR
			.content
				div Make everything fluffy 🐈
				.box
					product-section-link(:href="$url.demo.fur") Demo
					product-section-link(href="https://github.com/knt5/fur-shader") GitHub
				div
					img.product-image(src="@/assets/img/product/fur/fur.jpg")
				.card-box
					.card
						.small-title First release
						.box
							product-section-link(href="https://github.com/knt5/fur-shader/commit/2d5440c9c0a23cb6854920524691e4dc091ee40b")
								| 2016/07/17 2d5440c

		//- =======================================================================
		product-section-separator
		product-section-box
			.sub-section-title Cubox
			.content
				div A JavaScript camera app to make 3D cuboid model from 2 photos without WebGL and any servers' power
				.box
					product-section-link(:href="$url.demo.cubox") Demo
					product-section-link(href="https://github.com/knt5/cubox") GitHub
				.box
					img.cubox-image(src="@/assets/img/product/cubox/cubox1.jpg")
					img.cubox-image(src="@/assets/img/product/cubox/cubox2.jpg")
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
								| 2013/04/29 45d2397
							.notice * The DevCamp 2013 was held on April 27-28, 2013. This app was born on April 28th.

		//- =======================================================================
		product-section-separator
		product-section-box
			.sub-section-title Console Artist
			.content
				div A web browser console art generator
				.box
					product-section-link(:href="$url.demo.consoleArtist") Demo
					product-section-link(href="https://github.com/knt5/console-artist") GitHub
				div
					img.product-image(src="@/assets/img/product/console-artist/console-artist1.png")
					img.product-image(src="@/assets/img/product/console-artist/console-artist2.png")
				.card-box
					.card
						.small-title First release
						.box
							product-section-link(href="https://github.com/knt5/console-artist/commit/811d2802aeaffbb4567b20651cbdb02268938634")
								| 2016/05/09 811d280

		//- =======================================================================
		product-section-separator
		product-section-box
			.sub-section-title Portfolio site
			.content
				.card-box
					.card
						.small-title Version.2
						.box
								product-section-link(href="https://github.com/knt5/knt5.github.io") GitHub
						.box
							div TypeScript
							div Vue.js + vue cli
							div 2020/05/06
					.card
						.small-title Version.1
						.box
							product-section-link(:href="$url.demo.portfolio.v1") Demo
						.box
							div JavaScript
							div Original builder on gulp
							div 2016/11/10
					.card
						.small-title Version.0
						.box
							product-section-link(href="http://knt5lab.appspot.com/") Site
						.box
							div Go
							div Google App Engine
							div 2012/07/28
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductSectionBox from '@/components/ProductSectionBox.vue';
import ProductSectionLink from '@/components/ProductSectionLink.vue';
import ProductSectionSeparator from '@/components/ProductSectionSeparator.vue';

/** Product section */
@Component({
	components: {
		ProductSectionBox,
		ProductSectionLink,
		ProductSectionSeparator,
	},
})
export default class ProductSection extends Vue {
	// メモ：あとでけす。slot で差し込む。黒とか白は prop。デフォルト白。
}
</script>

<style lang="scss" scoped>
@import '~@/styles/layout';
@import '~@/styles/notice';
@import '~@/styles/section';
@import '~@/styles/title';
@import '~@/styles/variables';

.first-box {
	margin-top: 40px;
}

.dark-title {
	color: #fff;
}

.content {
	@extend %content;
	margin-top: 10px;
	padding: 0 $content-padding;
	text-align: center;
}

.box {
	padding-top: 10px;
}

.product-image {
	width: 100%;
	max-width: 560px;
	margin-top: 10px;
}

.small-title {
	@extend %small-title;
}

.card-box {
	margin-top: 20px;
	text-align: center;
}

.card {
	display: inline-block;
	padding: 20px 30px 0 30px;
}

//=============================================================================
// Hakoniwa

.hakoniwa-title {
	font-size: 40px;
}

.hakoniwa-image {
	width: 100%;
	max-width: $content-width;
	margin-top: 10px;
}

//=============================================================================
// Visual Dictionary

.visual-dictionary-icon {
	width: 100%;
	max-width: 128px;
}

.visual-dictionary-image {
	width: 100%;
	max-width: 720px;
}

//=============================================================================
// Cubox

.cubox-image {
	width: 100%;
	max-width: 420px;
	margin: 5px 5px 0 0;
}

.notice {
	@extend %notice;
}
</style>
