<template lang="pug">
	.home
		profile-section.section
		product-section.section
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProfileSection from '@/components/ProfileSection.vue';
import ProductSection from '@/components/ProductSection.vue';

/** Home */
@Component({
	components: {
		ProfileSection,
		ProductSection,
	},
	meta: () => ({ title: `Kenta Motomura` }),
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.section {
	margin-top: 60px;
}
</style>
