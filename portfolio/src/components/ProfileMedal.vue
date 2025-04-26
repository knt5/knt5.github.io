<template lang="pug">
	.profile-medal
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

/**
 * Profile image medal
 *
 * - TODO: Make 3D medal with WebGL
 */
@Component({})
export default class ProfileMedal extends Vue {}
</script>

<style lang="scss" scoped>
@use '~@/styles/layout';
@use '~@/styles/variables';

// medal size
$size: 180px;
$small-size: 140px;

.profile-medal {
	width: $size;
	height: $size;
	background: url(~@/assets/img/components/profile-medal/knt5.jpg) no-repeat;
	background-color: #f9f9f9;
	background-size: $size $size;
	border: 5px solid #fff;
	border-radius: 50%;
	box-shadow: 0 2px 6px 1px #999;
}

@media (max-width: variables.$content-width) {
	.profile-medal {
		width: $small-size;
		height: $small-size;
		background-size: $small-size $small-size;
		border-width: 4px;
	}
}
</style>
