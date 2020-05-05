<template lang="pug">
	//- TODO: 3D pie chart
	.programming
		.sub-section-title Programming language
		.sub-section-content
			.box
				.title I like
				div JavaScript, TypeScript, C
			.box
				.title Work experience
				div TypeScript, JavaScript, SCSS, Pug, CSS, HTML, Java, C, C#, Python, Swift, Shell script, Perl
					.weak , PHP, Objective-C, ActionScript(old!)
					span , etc
			.box
				.title Private
				div Work experience + GLSL, Go
					.weak , AppleScript, R, C++
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
	margin-top: 30px;
}

.sub-section-content {
	padding: 0 25px;
}

.box {
	margin-top: 20px;

	&:first-child {
		margin-top: 0;
	}
}

.title {
	@extend %small-title;
}

.strong {
	display: inline-block;
	color: $strong-text-color;
	font-weight: bold;
}

.weak {
	display: inline-block;
	color: #ccc;
}
</style>
