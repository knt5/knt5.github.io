<template lang="pug">
	.link
		.mark ➔
		a(:href="href" :target="target")
			slot
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

/** ProductSectionLink */
@Component({})
export default class ProductSectionLink extends Vue {
	@Prop({ required: true })
	private readonly href!: string;

	@Prop({})
	private readonly target?: string;
}
</script>

<style lang="scss" scoped>
.link {
	display: inline-block;
	margin-left: 20px;

	&:first-child {
		margin-left: 0;
	}
}

.mark {
	display: inline-block;
	padding-right: 5px;
}
</style>
