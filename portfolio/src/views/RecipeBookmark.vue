<template lang="pug">
	.recipe-bookmark
		.section-title Recipe bookmarks 🍳
		.content
			recipe-card(
				v-for="bookmark in bookmarks"
				:key="bookmark.url"
				:bookmark="bookmark"
			)
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RecipeCard from '@/components/RecipeCard.vue';
import ApiRepositoryFactory from '@/factories/ApiRepositoryFactory';
import ApiRepository from '@/repositories/api/ApiRepository';
import RecipeBookmarkRepository from '@/repositories/api/portfolio/RecipeBookmarkRepository';
import GetRecipeBookmarkApiResponse from '@/models/api/portfolio/recipe/bookmark/GetRecipeBookmarkApiResponse';

/** RecipeBookmark */
@Component({
	components: {
		RecipeCard,
	},
	meta: () => ({ title: `Recipe bookmarks - Kenta Motomura` }),
})
export default class RecipeBookmark extends Vue {
	private readonly recipeBookmarkRepository = ApiRepositoryFactory.get<
		RecipeBookmarkRepository
	>(ApiRepository.Name.RecipeBookmark);

	private response: GetRecipeBookmarkApiResponse | null = null;

	private get bookmarks(): GetRecipeBookmarkApiResponse.Bookmark[] {
		if (this.response) {
			return this.response.bookmarks;
		} else {
			return [];
		}
	}

	private async mounted(): Promise<void> {
		this.response = await this.recipeBookmarkRepository.get({});
	}
}
</script>

<style lang="scss" scoped>
@use '~@/styles/layout';
@use '~@/styles/section';
@use '~@/styles/variables';

.recipe-bookmark {
	margin-top: 60px;
}

.content {
	@extend %content;
	margin-top: 50px;
	text-align: center;
}

@media (max-width: variables.$content-width) {
	.section-title {
		font-size: 35px;
	}
}
</style>
