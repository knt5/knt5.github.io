<template lang="pug">
	.app-header
		.header
			.content
				h1.title Kenta Motomura
					a.github(:href="$url.github" target="_blank")
				.view-title {{ viewTitle }}
		.medal-box
			.medal
				profile-medal
			.medal-description Photo: Matterhorn🇨🇭 © 2011 Kenta Motomura
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RouteName from '@/models/router/RouteName';
import ProfileMedal from '@/components/ProfileMedal.vue';

/** Header */
@Component({
	components: {
		ProfileMedal,
	},
})
export default class AppHeader extends Vue {
	/** view title */
	private get viewTitle(): string {
		switch (this.$route.name) {
			case RouteName.Home:
				return `Portfolio`;
			case RouteName.RecipeBookmark:
				return `Recipe bookmarks`;
			case RouteName.NotFound:
				return ``;
			default:
				return ``;
		}
	}
}
</script>

<style lang="scss" scoped>
@import '~@/styles/layout';

$github-icon-size: 50px;
$github-icon-small-size: 32px;

.header {
	color: #fff;
	font-family: 'GillSans'; // for iOS
	background: linear-gradient(to left, #ff4e50, #ffc500);
}

.content {
	@extend %content;
	padding: 60px 0 66px;
}

.title {
	display: inline-block;
	font-weight: normal;
	font-size: 60px;
	line-height: 1.1;
}

.github {
	display: inline-block;
	width: $github-icon-size;
	height: $github-icon-size;
	margin: 0 0 -4px 30px;
	background: url(~@/assets/img/icons/github-large.png) no-repeat;
	background-size: $github-icon-size $github-icon-size;
	border-radius: 50%;

	&:hover {
		opacity: 0.6;
	}
}

.view-title {
	font-size: 28px;
}

.medal-box {
	margin-top: -70px;
	text-align: center;
}

.medal {
	display: inline-block;
}

.medal-description {
	margin-top: 30px;
	color: #999;
	font-size: 12px;
	font-family: 'GillSans'; // for iOS
	text-align: center;
}

@media (max-width: $content-width) {
	.content {
		padding: 40px 0;
		text-align: center;
	}

	.title {
		font-size: 40px;
	}

	.view-title {
		font-size: 20px;
	}

	.medal-box {
		margin-top: -20px;
		text-align: center;
	}

	.github {
		width: $github-icon-small-size;
		height: $github-icon-small-size;
		margin: 0 0 -2px 12px;
		background-size: $github-icon-small-size $github-icon-small-size;
	}
}
</style>
