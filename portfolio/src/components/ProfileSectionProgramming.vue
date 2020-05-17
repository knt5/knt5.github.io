<template lang="pug">
	//- TODO: 3D pie chart
	.programming
		.sub-section-title Programming languages
		.sub-section-content.clearfix
			.card
				.title 🎉 I like ✨
				div JavaScript, C, TypeScript
			.card
				.title ⚡️ Work experience
				div TypeScript, JavaScript, Java, C, C#, Python, Swift, SCSS, CSS, Pug, HTML, Shell script, Perl
					.weak , Objective-C, ActionScript(old!), PHP
					span , etc
			.card
				.title 🍀 Private
				div Work experience + Go, GLSL
					.weak , R, AppleScript, C++
					span , etc
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

/** Programming */
@Component({})
export default class ProfileSectionProgramming extends Vue {}
</script>

<style lang="scss" scoped>
@import '~@/styles/layout';
@import '~@/styles/section';
@import '~@/styles/title';

.programming {
	@extend %content;
}

.card {
	display: inline-block;
	width: 280px;
	margin: 0 20px 20px 0;
	padding: 15px 15px;
	vertical-align: top;
}

.title {
	@extend %small-title;
}

.weak {
	display: inline;
	color: #ccc;
}
</style>
