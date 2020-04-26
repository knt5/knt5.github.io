<template lang="pug">
	.app-header header
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

/** Header */
@Component({})
export default class AppHeader extends Vue {}
</script>

<style lang="scss">
.app-header {
	font-size: 300px;
}
</style>
