<template lang="pug">
	.recipe-bookmark
		.sub-section-title Recipe bookmarks 🍳
		.sub-section-content
			.recipe-box
				a.recipe(
					v-for="bookmark in bookmarks"
					:key="bookmark.url"
					:style="getRecipeImageStyle(bookmark)"
					:href="bookmark.url"
					target="_blank"
				)
			.more
				span ➔&nbsp;
				router-link(:to="{ name: $routeName.recipeBookmark }")
					| All bookmarks ({{ allBookmarksCount }})
				span &nbsp;🇯🇵
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ApiRepositoryFactory from '@/factories/ApiRepositoryFactory';
import ApiRepository from '@/repositories/api/ApiRepository';
import RecipeBookmarkRepository from '@/repositories/api/portfolio/RecipeBookmarkRepository';
import GetRecipeBookmarkApiResponse from '@/models/api/portfolio/recipe/bookmark/GetRecipeBookmarkApiResponse';

/** Max recipes */
const maxRecipes = 20;

/** Recipe bookmark */
@Component({})
export default class ProfileSectionRecipeBookmark extends Vue {
	private readonly recipeBookmarkRepository = ApiRepositoryFactory.get<
		RecipeBookmarkRepository
	>(ApiRepository.Name.RecipeBookmark);

	private response: GetRecipeBookmarkApiResponse | null = null;

	private get bookmarks(): GetRecipeBookmarkApiResponse.Bookmark[] {
		if (this.response) {
			return this.response.bookmarks.slice(0, maxRecipes);
		} else {
			return [];
		}
	}

	private get allBookmarksCount(): number {
		if (this.response) {
			return this.response.bookmarks.length;
		} else {
			return 0;
		}
	}

	private getRecipeImageStyle(
		bookmark: GetRecipeBookmarkApiResponse.Bookmark
	): string {
		if (bookmark.imageUrl) {
			return `background-image: url(${bookmark.imageUrl});`;
		} else {
			return ``;
		}
	}

	private async mounted(): Promise<void> {
		this.response = await this.recipeBookmarkRepository.get({});
	}
}
</script>

<style lang="scss" scoped>
@import '~@/styles/layout';
@import '~@/styles/section';
@import '~@/styles/variables';

$size: 80px;

.recipe-bookmark {
	@extend %content;
	margin-top: 55px;
	text-align: center;
}

.recipe-box {
	display: inline-block;
	max-width: 820px;
	font-size: 0;
}

.recipe {
	display: inline-block;
	width: $size;
	height: $size;
	margin: 0 1px 1px 0;
	vertical-align: bottom;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	&:hover {
		opacity: 0.5;
	}
}

.more {
	margin-top: 20px;
}
</style>
