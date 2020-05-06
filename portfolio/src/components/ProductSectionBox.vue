<template lang="pug">
	.product-section-box(:class="{ dark: isDark }")
		.content
			slot
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

/** ProductSectionBox */
@Component({})
class ProductSectionBox extends Vue {
	@Prop({ default: `default` })
	private readonly theme!: string;

	private get isDark(): boolean {
		return this.theme === ProductSectionBox.Theme.Dark;
	}
}

namespace ProductSectionBox {
	export enum Theme {
		Default = `default`,
		Dark = `dark`,
	}
}

export default ProductSectionBox;
</script>

<style lang="scss" scoped>
@import '~@/styles/layout';

.product-section-box {
	padding-top: 60px;
}

.dark {
	width: auto;
	padding: 60px 0;
	color: #fff;
	background: #000;
	background-image: linear-gradient(to left, #434343, #000);
}

.content {
	@extend %content;
}
</style>
