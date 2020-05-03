<template lang="pug">
	//- TODO: Make a swimming records chart
	.swimming
		.sub-section-title Swimming
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

/** Swimming */
@Component({})
export default class ProfileSectionSwimming extends Vue {
	// TODO: get data
}
</script>

<style lang="scss" scoped>
@import '~@/styles/layout';
@import '~@/styles/section';

.swimming {
	@extend %content;
}
</style>
