<template lang="pug">
	.profile-section
		.section-title.title Profile
		.profile-box
			.card
				.item-title Name
				.item Kenta Motomura
			.card
				.item-title Location
				.item Tokyo🗼, Japan🇯🇵
			a(href="https://github.com/knt5" target="_blank").link-card
				.item-title GitHub 🚀
				.item https://github.com/knt5
			.card
				.item-title Job
				.item Software engineer
			.card
				.item-title Interests
				.item c, typescript, javascript, react, vuejs, photos, graphics, design, 3d, gpu, maps, test, performance, usability, maintainability, user interface, deep learning(e.g. cnn), mac, iphone, ios, git, japan, swimming, cooking, onsen
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

/** Profile section */
@Component({})
export default class ProfileSection extends Vue {}
</script>

<style lang="scss" scoped>
@import '~@/styles/layout';
@import '~@/styles/section';

.profile-section {
	@extend %content;
	margin-top: 60px;
	padding: 0 20px;
	text-align: center;
}

.title {
	letter-spacing: 1.5px;
}

.profile-box {
	text-align: center;
}

.card {
	display: inline-block;
	margin: 0 20px 20px 0;
	padding: 22px 17px;
	border: 1px solid #fff;
}

.link-card {
	@extend .card;

	&:hover {
		text-decoration: none;
		border: 1px solid $link-text-hover-color;
		box-shadow: 0 1px 2px 0px #ccc;
	}
}

.item-title {
	color: $strong-text-color;
	font-weight: bold;
	font-size: 14px;
	letter-spacing: 0.1em;
	text-transform: uppercase;
}

@media (max-width: $content-width) {
	.card {
		margin: 0;
		padding: 10px 14px;
	}
}
</style>
