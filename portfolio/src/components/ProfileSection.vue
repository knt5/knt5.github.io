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
				a(:href="$url.github" target="_blank").link-card
					.item-title GitHub 🚀
					.item {{ $url.github }}
				.card
					.item-title Job
					.item Software engineer
				.card
					.item-title Interests
					.item
						a.interest(
							v-for="interest in interests"
							:key="interest"
							:href="getInterestLink(interest)"
							target="_blank"
						) {{ interest }}
		profile-section-programming
		profile-section-swimming
		profile-section-recipe-bookmark
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProfileSectionProgramming from '@/components/ProfileSectionProgramming.vue';
import ProfileSectionRecipeBookmark from '@/components/ProfileSectionRecipeBookmark.vue';
import ProfileSectionSwimming from '@/components/ProfileSectionSwimming.vue';

/** Profile section */
@Component({
	components: {
		ProfileSectionProgramming,
		ProfileSectionRecipeBookmark,
		ProfileSectionSwimming,
	},
})
export default class ProfileSection extends Vue {
	private get interests(): string[] {
		return [
			`c`,
			`typescript`,
			`javascript`,
			`react`,
			`vue.js`,
			`photos`,
			`graphics`,
			`design`,
			`3d`,
			`gpu`,
			`maps`,
			`test`,
			`deep learning(e.g. cnn)`,
			`deepl`,
			`performance`,
			`usability`,
			`maintainability`,
			`user interface`,
			`team building`,
			`mac`,
			`iphone`,
			`ios`,
			`git`,
			`japan`,
			`kyoto⛩`,
			`tokyo🗼`,
			`swimming 🏊‍♂️`,
			`cooking 🍳`,
			`onsen`,
		];
	}

	private getInterestLink(interest: string): string {
		return `https://www.google.com/search?q=${encodeURIComponent(interest)}`;
	}
}
</script>

<style lang="scss" scoped>
@use '~@/styles/layout';
@use '~@/styles/section';
@use '~@/styles/title';
@use '~@/styles/variables';

.profile-section {
	@extend %content;
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
	border-radius: 3px;
}

.interest {
	display: inline-block;
	margin: 0 -4px;
	padding: 1px 12px;
	border-radius: 28px;
	transition: border 0.1s ease-out;

	&:hover {
		text-decoration: none;
		background: #eef;
		transition: none;
	}
}

.link-card {
	@extend .card;

	&:hover {
		text-decoration: none;
		border: 1px solid variables.$link-text-hover-color;
		box-shadow: 0 1px 2px 0px #ccc;
	}
}

.item-title {
	@extend %small-title;
}

@media (max-width: variables.$content-width) {
	.card {
		margin: 0;
		padding: 10px 14px;
	}

	.card-box {
		padding-bottom: 32px;
	}
}
</style>
