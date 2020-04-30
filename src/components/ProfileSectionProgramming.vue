<template lang="pug">
	.programming
		.sub-section-title Programming
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

.programming {
	@extend %content;
}
</style>
