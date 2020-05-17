<template lang="pug">
	.recipe-bookmark RecipeBookmark
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

/** RecipeBookmark */
@Component({
	components: {},
	meta: () => ({ title: `Recipe bookmarks - Kenta Motomura` }),
})
export default class RecipeBookmark extends Vue {}
</script>

<!--
<style lang="scss" scoped>
.section {
	margin-top: 60px;
}
</style>
-->
