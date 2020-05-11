<template lang="pug">
	//- TODO: 3D pie chart
	.programming
		.sub-section-title Programming language
		.sub-section-content
			.box
				.title 🎉 I like ✨
				div JavaScript, TypeScript, C
			.box
				.title ⚡️ Work experience
				div TypeScript, JavaScript, C, C#, Python, SCSS, Pug, Swift, Java, CSS, HTML, Shell script, Perl
					.weak , Objective-C, ActionScript(old!), PHP
					span , etc
			.box
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

.sub-section-content {
	padding: 0 $content-padding;
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

.weak {
	display: inline;
	color: #ccc;
}
</style>
