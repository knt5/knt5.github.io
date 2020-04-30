<template lang="pug">
	div
		.profile-section
			.section-title.title Profile
			.card-box
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
		profile-section-programming
		profile-section-swimming
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProfileSectionProgramming from '@/components/ProfileSectionProgramming.vue';
import ProfileSectionSwimming from '@/components/ProfileSectionSwimming.vue';

/** Profile section */
@Component({
	components: {
		ProfileSectionProgramming,
		ProfileSectionSwimming,
	},
})
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

.card-box {
	text-align: center;
}

.card {
	display: inline-block;
	margin: 0 20px 20px 0;
	padding: 22px 17px;
	border: 1px solid #fff;
	border-radius: 2px;
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
