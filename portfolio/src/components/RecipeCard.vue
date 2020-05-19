<template lang="pug">
	a.recipe-card(:href="bookmark.url" target="_blank")
		.image(:style="imageStyle")
		.details
			.title {{ bookmark.title }}
			.description.clearfix
				.date {{ bookmark.createdAt }}
				//- TODO: Refine by category
				.tag(v-show="tag") {{ tag }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import GetRecipeBookmarkApiResponse from '@/models/api/portfolio/recipe/bookmark/GetRecipeBookmarkApiResponse';

/** RecipeCard */
@Component({
	components: {},
})
export default class RecipeCard extends Vue {
	@Prop({ required: true })
	private readonly bookmark!: GetRecipeBookmarkApiResponse.Bookmark;

	private get imageStyle(): string {
		return this.bookmark.imageUrl
			? `background-image: url(${this.bookmark.imageUrl});`
			: ``;
	}

	private get tag(): string {
		switch (this.bookmark.category) {
			case `tech`:
				return `Basic cooking technique`;
			default:
				return ``;
		}
	}
}
</script>

<style lang="scss" scoped>
@import '~@/styles/section';
@import '~@/styles/variables';

$card-width: 430px;

.recipe-card {
	display: inline-block;
	margin: 0 10px 10px 0;
	vertical-align: top;

	&:hover {
		text-decoration: none;
		opacity: 0.6;
	}
}

.image {
	display: block;
	width: 100%;
	max-width: $card-width;
	height: 280px;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
}

.details {
	width: $card-width;
	margin: 15px 0;
	text-align: left;
}

.title {
	color: $strong-text-color;
	font-weight: bold;
}

.description {
	margin-top: 10px;
}

.date {
	float: left;
	color: #999;
}

.tag {
	float: right;
	margin: -2px 0 0 10px;
	padding: 2px 12px;
	color: $text-color;
	font-size: 14px;
	background: #ddf;
	border-radius: 28px;
}

@media (max-width: $content-width) {
	.recipe-card {
		margin: 0 0 20px 0;
	}

	.details {
		padding: 0 10px;
	}
}

@media (max-width: $card-width) {
	.recipe-card {
		display: block;
		width: auto;
		margin: 0 0 20px 0;
	}

	.details {
		width: auto;
	}
}
</style>
