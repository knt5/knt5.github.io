<template lang="pug">
	.app-footer
		.content
			.link-box
				a.link.github(:href="$url.github" target="_blank") GitHub
				a.link.twitter(href="https://twitter.com/knt5" target="_blank") Twitter🔒
				a.link.facebook(href="https://www.facebook.com/knt5f" target="_blank") Facebook
			.copyright Copyright © Kenta Motomura. All rights reserved.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

/** Footer */
@Component({})
export default class AppFooter extends Vue {}
</script>

<style lang="scss" scoped>
@use '~@/styles/layout';

@mixin icon($name) {
	background: url(~@/assets/img/icons/#{$name}.png) no-repeat left 2px;
	background-size: 18px 18px;
}

.app-footer {
	margin-top: 80px;
	color: #fff;
	background: linear-gradient(to left, #4b6cb7, #182848);
}

.content {
	@extend %content;
	padding: 0 20px;
}

.copyright {
	padding: 40px 0;
	font-size: 12px;
	font-family: 'GillSans'; // for iOS
	text-align: center;
}

.link-box {
	padding-top: 40px;
	text-align: center;
}

.link {
	display: inline-block;
	margin-top: 10px;
	margin-right: 24px;
	padding-left: 24px;
	color: #fff;

	&:hover {
		color: #fff;
		text-decoration: none;
		opacity: 0.6;
	}

	&:last-child {
		margin-right: 0;
	}
}

.github {
	@include icon(github);
}

.twitter {
	@include icon(twitter);
}

.facebook {
	@include icon(facebook);
}
</style>
