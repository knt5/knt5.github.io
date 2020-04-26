<template lang="pug">
	.not-found Not found
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

/** Not found */
@Component({
	components: {},
	meta: () => ({ title: `Not found` }),
})
export default class NotFound extends Vue {}
</script>

<style lang="scss" scoped>
.not-found {
	padding: 48px;
	font-size: 48px;
}
</style>
